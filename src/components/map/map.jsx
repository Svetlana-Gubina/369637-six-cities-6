import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {getOffersForCity} from '../../utils';
import {placesInfoPropType, cityNamePropType, idPropType} from '../../prop-types';

const getIcon = (pointId, activeId, icon, activeIcon) => {
  return pointId === activeId ? activeIcon : icon;
};

const Map = ({activePlaceCardId, activeCityItem, placesInfo}) => {
  const activeCityOffers = getOffersForCity(activeCityItem, placesInfo);
  const mapRef = useRef();

  useEffect(()=> {
    const city = activeCityOffers[0].city.location;
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.latitude,
        lng: city.longitude,
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

    return () => {
      mapRef.current.remove();
    };
  }, [activeCityItem]);

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
  }, [activePlaceCardId]);


  return (
    <div id="map" style={{
      height: `600px`
    }} ref={mapRef}></div>
  );
};

const mapStateToProps = (state) => ({
  activeCityItem: state.activeCityItem,
  placesInfo: state.hotelsList,
});

Map.propTypes = {
  placesInfo: placesInfoPropType,
  activeCityItem: cityNamePropType,
  activePlaceCardId: idPropType,
};

export {Map};
export default connect(mapStateToProps, null)(Map);
