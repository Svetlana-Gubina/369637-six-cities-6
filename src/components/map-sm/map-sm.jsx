import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LoadingScreen from '../loading-screen/loading-screen';
import {placesInfoPropType, idPropType, locationPropType} from '../../prop-types';

const MapSm = ({location, points}) => {
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
