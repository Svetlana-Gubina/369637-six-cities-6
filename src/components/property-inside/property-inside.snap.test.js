import React from 'react';
import {render} from '@testing-library/react';
import PropertyInside from './property-inside';

test(`Should PropertyInside render correctly`, () => {
  const goodsList = [`Heating`, `Kitchen`, `Cable TV`];

  const {container} = render(<PropertyInside goods={goodsList} />);
  expect(container).toMatchSnapshot();
});
