import React from "react";
import Link from "next/link";

const UserItem = ({ name, image, places,id }) => {
  return (
    <Link href="/userPlaces/[userPlaces]" as={`/userPlaces/${id}`}>
      <a className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64 is-1by1">
              <img className="is-rounded" src={image} alt={name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong className="title is-4">{name}</strong>
                <br />
              </p>
            </div>
            <div className="level is-mobile">
              <div className="control">
                <div className="tags has-addons ">
                  <span className="tag is-dark is-medium">
                    <span className="icon level-left">
                      <i className="fas fa-map-marked-alt "></i>
                    </span>
                    <span className="level-right">
                      {places > 1 ? "places" : "place"}
                    </span>
                  </span>
                  <span className="tag is-info is-medium">{places}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default UserItem;
