import React, {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LoadingScreen from '../loading-screen/loading-screen';
import {getOffersForCity, getActiveCityLocation} from '../../utils';
import {getParsedHotelsData} from '../../selectors';
import {placesInfoPropType, idPropType, cityNamePropType} from '../../prop-types';

const getIcon = (pointId, activeId, icon, activeIcon) => {
  return pointId === activeId ? activeIcon : icon;
};

const Map = ({cityName, activePlaceCardId, points}) => {
  const placesInfo = useSelector(getParsedHotelsData);
  const {isDataLoaded} = useSelector((state) => state.DATA);
  const activeCityOffers = points || getOffersForCity(cityName, placesInfo);
  const mapRef = useRef();

  if (!activeCityOffers) {
    return (
      <LoadingScreen />
    );
  }

  useEffect(()=> {
    if (isDataLoaded) {
      const city = getActiveCityLocation(cityName, placesInfo);
      mapRef.current = leaflet.map(`map`, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
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
  }, [cityName, activeCityOffers]);

  useEffect(() => {
    activeCityOffers.forEach((point) => {
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
  }, [cityName, activePlaceCardId]);


  return (
    <div id="map" style={{
      height: `100%`
    }}></div>
  );
};

Map.propTypes = {
  cityName: cityNamePropType,
  points: placesInfoPropType,
  activePlaceCardId: idPropType,
};

export default React.memo(Map);
