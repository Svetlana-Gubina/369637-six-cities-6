import React from 'react';
import {v4 as uuidv4} from "uuid";
import {useDispatch} from 'react-redux';
import SortTypesItem from '../sort-types-item/sort-types-item';
import {popUpStatePropType, sortTypeNamePropType, sortTypesPropType} from '../../prop-types';
import {setSortType} from '../../store/action';


const SortTypesList = (props) => {
  const {popUpState, typesOfSort, activeSortTypeName} = props;

  const dispatch = useDispatch();

  const choseSortType = (type) => {
    dispatch(setSortType(type));
  };

  return (
    <ul className={`places__options places__options--custom ${popUpState ? `places__options--opened` : ``}`}>
      {Object.values(typesOfSort).map((sortType) => <SortTypesItem
        key={uuidv4()}
        sortTypeName={sortType}
        activeSortTypeName={activeSortTypeName}
        choseSortType={choseSortType}
      />)}
    </ul>);
};

SortTypesList.propTypes = {
  typesOfSort: sortTypesPropType,
  sortTypeName: sortTypeNamePropType,
  activeSortTypeName: sortTypeNamePropType,
  popUpState: popUpStatePropType,
};

export default SortTypesList;
