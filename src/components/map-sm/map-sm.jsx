import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LoadingScreen from '../loading-screen/loading-screen';
import {placesInfoPropType, idPropType, locationPropType} from '../../prop-types';

const getIcon = (pointId, activeId, icon, activeIcon) => {
  return pointId === activeId ? activeIcon : icon;
};

const MapSm = ({location, activePlaceCardId, points}) => {
  const mapRef = useRef();

  if (!points) {
    return (
      <LoadingScreen />
    );
  }

  useEffect(()=> {
    if (points) {
      mapRef.current = leaflet.map(`map`, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
        zoomControl: true,
        marker: true
      });

      leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(mapRef.current);

    }

    return () => {
      mapRef.current.remove();
    };
  }, [points]);

  useEffect(() => {
    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      const activeIcon = leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: point.location.latitude,
        lng: point.location.longitude,
      },
      {
        icon: getIcon(point.id, activePlaceCardId, customIcon, activeIcon)
      })
      .addTo(mapRef.current)
      .bindPopup(point.title);
    });
  }, [activePlaceCardId]);


  return (
    <div id="map" style={{
      height: `100%`
    }}></div>
  );
};

MapSm.propTypes = {
  points: placesInfoPropType,
  activePlaceCardId: idPropType,
  location: locationPropType
};

export default MapSm;
