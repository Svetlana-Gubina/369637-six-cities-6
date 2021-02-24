import React, {useState} from 'react';
import SortTypesList from '../sort-types-list/sort-types-list';
import {sortTypeNameType, sortTypesType} from '../../prop-types';

const PlacesSortingForm = (props) => {
  const {sortTypes, activeSortTypeName} = props;
  const [popUpState, togglePopUp] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => togglePopUp(!popUpState)}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSortTypeName}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <SortTypesList popUpState={popUpState} sortTypes={sortTypes} activeSortTypeName={activeSortTypeName} />
    </form>
  );
};

PlacesSortingForm.propTypes = {
  sortTypes: sortTypesType,
  activeSortTypeName: sortTypeNameType,
};

export default PlacesSortingForm;
