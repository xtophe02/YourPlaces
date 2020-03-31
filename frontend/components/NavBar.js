import React from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavBar = ({title}) => {
 
  const [activeItem, setActiveItem] = React.useState(false)
  return (
  
 /*    <nav
      className="navbar is-fixed-top is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href='/'>
       
        <a className="navbar-item" href="https://bulma.io">
          <span className="title is-4 has-text-white">YourPlaces</span>
          
        </a>
        </Link>
        <a
          role="button"
          className={`navbar-burger burger ${activeItem ? 'is-active ' : null}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={()=>setActiveItem(!activeItem)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${activeItem ? 'is-active' : null}`}>
        <div className="navbar-start">
         
        </div>

        <div className="navbar-end">
          <Link href='/' >
          <a className={`navbar-item ${title === 'Users' ? 'is-active' : null}`}>All Users</a>
          </Link>
        
          
        <Link href='/myplaces' >
        <a className={`navbar-item ${title === 'My Places' ? 'is-active' : null}`}>My Places</a>
        </Link>
        <Link href='/addplace'>
        <a className="navbar-item">Add Place</a>
        </Link>
        
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Authenticate</strong>
              </a>
     
            </div>
          </div>
        </div>
      </div>
    </nav> */
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu is-active">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  );
};

export default NavBar;
