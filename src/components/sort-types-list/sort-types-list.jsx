import React from 'react';
import {v4 as uuidv4} from "uuid";
import {connect} from 'react-redux';
import SortTypesItem from '../sort-types-item/sort-types-item';
import {sortTypeNameType, setActiveElementType, sortTypesType} from '../../prop-types';
import {ActionCreator} from '../../store/action';


const SortTypesList = (props) => {
  const {sortTypes, activeSortTypeName, choseSortType} = props;

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {sortTypes.map((option) => <SortTypesItem
        key={uuidv4()}
        sortTypeName={option.name}
        activeSortTypeName={activeSortTypeName}
        choseSortType={choseSortType}
      />)}
    </ul>);
};

SortTypesList.propTypes = {
  sortTypes: sortTypesType,
  sortTypeName: sortTypeNameType,
  activeSortTypeName: sortTypeNameType,
  choseSortType: setActiveElementType
};

const mapDispatchToProps = (dispatch) => ({
  setActiveCityItem(cityName) {
    dispatch(ActionCreator.choseCity(cityName));
  },
});


export {SortTypesList};
export default connect(null, mapDispatchToProps)(SortTypesList);
