import React from 'react';
import './ImageItem.css';

const ImageItem = ({ src, openModal }) => {
  return (
    <div className="image-item" onClick={openModal}>
      <img src={src} alt="Gallery" />
    </div>
  );
};

export default ImageItem;
