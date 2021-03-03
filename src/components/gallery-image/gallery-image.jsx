import React from 'react';
import {imgSrcPropType} from '../../prop-types';

const GalleryImage = (props) => {
  const {imageUrl} = props;

  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={imageUrl} alt="Photo studio" />
    </div>
  );
};

GalleryImage.propTypes = {
  imageUrl: imgSrcPropType,
};

export default GalleryImage;
