import React from 'react';
import {v4 as uuidv4} from "uuid";
import {connect} from 'react-redux';
import SortTypesItem from '../sort-types-item/sort-types-item';
import {popUpStatePropType, sortTypeNamePropType, setActiveElementPropType, sortTypesPropType} from '../../prop-types';
import {ActionCreator} from '../../store/action';


const SortTypesList = (props) => {
  const {popUpState, typesOfSort, activeSortTypeName, choseSortType} = props;

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
  choseSortType: setActiveElementPropType,
  popUpState: popUpStatePropType,
};

const mapDispatchToProps = (dispatch) => ({
  choseSortType(type) {
    dispatch(ActionCreator.setSortType(type));
    dispatch(ActionCreator.sortOptions(type));
  },
});


export {SortTypesList};
export default connect(null, mapDispatchToProps)(SortTypesList);
