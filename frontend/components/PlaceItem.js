import React from "react";
import Modal from "./Modal";
import Link from "next/link";

function reducer(state, action) {
  switch (action.type) {
    case "MAP":
      return {...state, map:!state.map};
    case "DELETE":
      return {...state, delete:!state.delete};;
    default:
      state;
  }
}

const PlaceItem = ({
  title,
  image,
  address,
  description,
  creatorId,
  coordinates,
  id,
}) => {
  // const [state, setState] = React.useState(false)
  const [state, dispatch] = React.useReducer(reducer, {
    map: false,
    delete: false,
  });

  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column is-three-quarters">
        <div className="card ">
          <div className="card-image">
            <figure className="image is-3by2">
              <img src={image} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content ">
            <div className="media">
              {/* <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src={image}
                  alt="Placeholder image"
                />
              </figure>
            </div> */}
              <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">@{address}</p>
              </div>
            </div>

            <div className="content ">
              {description}
              {/* <a href="#">#responsive</a> */}
              <br />
              {/* <p>{address}</p> */}
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <a
                onClick={() => dispatch({ type: "MAP" })}
                className="button is-primary is-light is-fullwidth"
              >
                View on Map
              </a>
            </div>

            <div className="card-footer-item">
              <Link href={`/editPlace/${id}`}>
                <a className="button is-link is-light is-fullwidth">Edit</a>
              </Link>
            </div>
            <div className="card-footer-item">
              <a
                onClick={() => dispatch({ type: "DELETE" })}
                className="button is-danger is-light is-fullwidth"
              >
                Delete
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div className="column"></div>
      <br />
      <Modal state={state.map} dispatch={dispatch} coordinates={coordinates} />
      <Modal state={state.delete} dispatch={dispatch} />
    </div>
  );
};

export default PlaceItem;
