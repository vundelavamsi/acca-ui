import React from 'react';
import { Button } from 'react-bootstrap';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Success!</h3>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}

export default Modal;
