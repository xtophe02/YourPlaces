import React from "react";
import Link from 'next/link'

const UserItem = ({ name, image, places }) => {
  return (
     
<Link href='/opo'>
    <a className="box">
     
      <article className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img className="is-rounded" src={image} alt={name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong>
              <br />
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="control">
              <div className="tags has-addons">
                <span className="tag is-dark">places</span>
                <span className="tag is-info">{places}</span>
              </div>
            </div>
          </nav>
        </div>
      </article>
     
    </a>

    </Link>
  );
};

export default UserItem;
