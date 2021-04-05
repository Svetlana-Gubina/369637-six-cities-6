import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SortTypesItem from './sort-types-item';
import {SortType} from '../../constants';

it(`SortTypesItem should render correctly`, () => {
  const sortTypeName = SortType.PRICE_HIGH_TO_LOW;
  const activeSortTypeName = SortType.POPULAR;
  const choseSortType = jest.fn();

  render(
      <SortTypesItem sortTypeName={sortTypeName} activeSortTypeName={activeSortTypeName} choseSortType={choseSortType} />
  );

  userEvent.click(screen.getByText(`${sortTypeName}`));
  expect(choseSortType).toHaveBeenCalledTimes(1);
});
