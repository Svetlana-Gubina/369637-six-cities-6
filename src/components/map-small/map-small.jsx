import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LoadingScreen from '../loading-screen/loading-screen';
import {MAX_NEARBY_TO_RENDER} from '../../constants';
import {placesInfoPropType, idPropType, locationPropType, placeInfoPropType} from '../../prop-types';

const getIcon = (pointId, currentId, currentIcon, pointsIcon) => {
  return pointId === currentId ? currentIcon : pointsIcon;
};

const MapSmall = ({points, hotel}) => {
  const location = hotel.city.location;
  const nearbyToRender = points.slice(0, MAX_NEARBY_TO_RENDER - 1);
  const pointsToRender = [...nearbyToRender, hotel];
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
  }, [hotel]);

  useEffect(() => {
    pointsToRender.forEach((point) => {
      const pointsIcon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      const currentIcon = leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: point.location.latitude,
        lng: point.location.longitude,
      },
      {
        icon: getIcon(point.id, hotel.id, currentIcon, pointsIcon)
      })
      .addTo(mapRef.current)
      .bindPopup(point.title);
    });
  }, [hotel]);


  return (
    <div id="map" style={{
      height: `100%`
    }}></div>
  );
};

MapSmall.propTypes = {
  hotel: placeInfoPropType,
  points: placesInfoPropType,
  activePlaceCardId: idPropType,
  location: locationPropType
};

export default MapSmall;
