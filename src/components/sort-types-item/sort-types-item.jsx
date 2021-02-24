import React from 'react';
import {sortTypeNameType, setActiveElementType} from '../../prop-types';

const SortTypesItem = (props) => {
  const {sortTypeName, activeSortTypeName, choseSortType} = props;

  return (
    <li className={`places__option ${sortTypeName === activeSortTypeName ? `tabs__item--active` : ``}`} tabIndex={0} onClick={() => choseSortType(sortTypeName)}>
      {sortTypeName}
    </li>
  );
};

SortTypesItem.propTypes = {
  sortTypeName: sortTypeNameType,
  activeSortTypeName: sortTypeNameType,
  choseSortType: setActiveElementType
};

export default SortTypesItem;
