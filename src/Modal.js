import React from 'react';
import './Modal.css';

const Modal = ({ image, closeModal }) => {
  return (
    <div className="modal">
      <span className="close" onClick={closeModal}>&times;</span>
      <img className="modal-content" src={image} alt="Selected" />
    </div>
  );
};

export default Modal;
