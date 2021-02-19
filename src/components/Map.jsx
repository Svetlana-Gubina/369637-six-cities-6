import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {cityType, pointsType} from '../propTypes';

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
      height: `600px`
    }} ref={mapRef}></div>
  );
};

Map.propTypes = {
  points: pointsType,
  city: cityType,
};

export default Map;
