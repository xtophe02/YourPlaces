import React from "react";
import Map from "./Map";

const Modal = ({ state, dispatch, coordinates }) => {
  return (
    <div className={`modal ${state && "is-active"}`}>
      {coordinates ? (
        <>
          <div
            className="modal-background"
            onClick={() => dispatch({ type: "MAP" })}
          ></div>
          <div className="modal-content">
            <Map center={coordinates} zoom={16} />
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => dispatch({ type: "MAP" })}
          ></button>
        </>
      ) : (
        <>
          <div
            className="modal-background"
            onClick={() => dispatch({ type: "DELETE" })}
          ></div>
          <div className="modal-content">
            <article className="message is-danger">
              <div className="message-header">
                <p>Delete Place</p>
                <button
                  className="delete"
                  aria-label="delete"
                  onClick={() => dispatch({ type: "DELETE" })}
                ></button>
              </div>
              <div className="message-body">
                Are you sure do you want to delete?
                <div className="field is-grouped is-grouped-centered">
                  <p className="control">
                    <a className="button is-danger is-outlined">Confirm</a>
                  </p>
                  <p className="control">
                    <a onClick={() => dispatch({ type: "DELETE" })} className="button is-info is-outlined">Cancel</a>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
