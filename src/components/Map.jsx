import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({city, points}) => {
  const mapRef = useRef();

  useEffect(()=> {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.lat,
        lng: city.lng,
      },
      zoom: city.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(mapRef.current);

    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: point.lat,
        lng: point.lng,
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(point.placeCardName);

      return () => {
        mapRef.current.remove();
      };
    });
  }, []);


  return (
    <div id="map" style={{
      height: `500px`
    }} ref={mapRef}></div>
  );
};

Map.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  })),
  city: PropTypes.shape({
    zoom: PropTypes.number,
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

export default Map;
