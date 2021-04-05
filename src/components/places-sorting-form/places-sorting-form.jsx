import React, {useState} from 'react';
import SortTypesList from '../sort-types-list/sort-types-list';
import {sortTypeNamePropType, sortTypesPropType} from '../../prop-types';

const PlacesSortingForm = (props) => {
  const {typesOfSort, activeSortTypeName} = props;
  const [popUpState, togglePopUp] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => togglePopUp(!popUpState)} data-testid="sortForm">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSortTypeName}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <SortTypesList popUpState={popUpState} typesOfSort={typesOfSort} activeSortTypeName={activeSortTypeName} />
    </form>
  );
};

PlacesSortingForm.propTypes = {
  typesOfSort: sortTypesPropType,
  activeSortTypeName: sortTypeNamePropType,
};

export default PlacesSortingForm;
