import React from "react";

const Modal = ({state, setState}) => {
  return (
    <div className={`modal ${state && 'is-active'}`}>
      <div className="modal-background"></div>
      <div className="modal-content">

      <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      <nav className="level is-mobile">
      <button className="button is-medium is-fullwidth" onClick={()=>setState(!state)}>Close</button>
      </nav>
    </div>
  </article>
</div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={()=>setState(!state)} ></button>
    </div>
  );
};

export default Modal;
