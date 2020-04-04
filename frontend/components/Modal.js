import React from "react";
import Map from './Map'

const Modal = ({state, setState, coordinates}) => {
  return (
    <div className={`modal ${state && 'is-active'}`}>
      <div className="modal-background" onClick={()=>setState(!state)}></div>
      <div className="modal-content">

      <Map center={coordinates} zoom={16} />
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={()=>setState(!state)} ></button>
    </div>
  );
};

export default Modal;
