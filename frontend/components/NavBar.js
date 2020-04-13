import React from "react";
import Link from "next/link";
import { CSSTransition } from 'react-transition-group';
import {AuthContext} from '../context/auth'

const NavBar = ({title}) => {
  const auth = React.useContext(AuthContext)
 
  const [activeItem, setActiveItem] = React.useState(false);
  
  return (
    <nav
      className="navbar is-dark is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <span className="title is-4 has-text-white">YourPlaces</span>
          </a>
        </Link>

        <a
          role="button"
          className={`navbar-burger burger ${activeItem && "is-active " }`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setActiveItem(!activeItem)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      {/* <CSSTransition
        in={activeItem}
        timeout={200}
        classNames="navbar-menu"
        // unmountOnExit
        // mountOnEnter
        // onEnter={() => setShowButton(false)}
        // onExited={() => setShowButton(true)}
      > */}
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${activeItem && "is-active"}`}
      >
        <div className="navbar-start"></div>

        <div className="navbar-end">
          <Link href="/">
            <a className={`navbar-item ${title === "Users" && "is-active"}`}>
              All Users
            </a>
          </Link>
{auth.isLoggedIn && <Link href="/userPlaces">
            <a
              className={`navbar-item ${title === "My Places" && "is-active"}`}
            >
              My Places
            </a>
          </Link>}
          {auth.isLoggedIn && <Link href="/addPlace">
            <a className={`navbar-item ${title === "Add Place" && "is-active"}`}>Add Place</a>
          </Link>
}
          {!auth.isLoggedIn &&
          <div className="navbar-item">
          <div className="buttons">
          <Link href="/authenticate">
            <a className="button is-primary">
              <strong>Authenticate</strong>
            </a>
            </Link>
          </div>
        </div>
          }
          {auth.isLoggedIn &&
          <div className="navbar-item">
          <div className="buttons">
          
            <a className="button is-danger" onClick={auth.logout}>
              <strong>Logout</strong>
            </a>
           
          </div>
        </div>
          }
          
        </div>
      </div>
      {/* </CSSTransition> */}
    </nav>
  );
};

export default NavBar;
