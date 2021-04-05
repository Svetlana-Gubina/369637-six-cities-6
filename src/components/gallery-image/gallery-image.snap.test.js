import React from 'react';
import {render} from '@testing-library/react';
import GalleryImage from './gallery-image';

test(`Should GalleryImage render correctly`, () => {
  const url = `img/1.png`;

  const {container} = render(<GalleryImage imageUrl={url} />);
  expect(container).toMatchSnapshot();
});
