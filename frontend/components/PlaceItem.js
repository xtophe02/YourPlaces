import React from "react";
import Modal from './Modal'

const PlaceItem = ({ title, image, address, description, creatorId }) => {
  const [state, setState] = React.useState(false)
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
            <div href="#" className="card-footer-item">
              <a onClick={()=>setState(!state)} className="button is-primary is-light is-fullwidth">
                View on Map
              </a>
            </div>

            <div href="#" className="card-footer-item">
              <a href="#" className="button is-link is-light is-fullwidth">
                Edit
              </a>
            </div>
            <div href="#" className="card-footer-item">
              <a className="button is-danger is-light is-fullwidth">Delete</a>
            </div>
           

          </footer>
        </div>
      </div>
      <div className="column"></div>
      <br />
      <Modal state={state} setState={setState}/>
    </div>
  );
};

export default PlaceItem;
