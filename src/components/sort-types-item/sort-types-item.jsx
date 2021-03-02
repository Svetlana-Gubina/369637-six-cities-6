import React from 'react';
import {sortTypeNamePropType, setActiveElementPropType} from '../../prop-types';

const SortTypesItem = (props) => {
  const {sortTypeName, activeSortTypeName, choseSortType} = props;

  return (
    <li className={`places__option ${sortTypeName === activeSortTypeName ? `tabs__item--active` : ``}`} tabIndex={0} onClick={() => choseSortType(sortTypeName)}>
      {sortTypeName}
    </li>
  );
};

SortTypesItem.propTypes = {
  sortTypeName: sortTypeNamePropType,
  activeSortTypeName: sortTypeNamePropType,
  choseSortType: setActiveElementPropType
};

export default SortTypesItem;
