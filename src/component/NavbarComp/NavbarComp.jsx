import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './NavbarComp.css';


function NavbarComp() {
  return (
    <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light panjangNav container-fluid">
            <div className="container-fluid">
                <Link className="navbar-brand style-logo" to="/">LOGO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to='/'>Our Services</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to='/'>Why Us</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to='/'>Testimonial</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to='/'>FAQ</Link>
                      </li>
                      <li className="nav-item">
                        <Link id="administrasi-menu" className="nav-link" to='/'>Register</Link>
                      </li>
                    </ul>
                  </div>
              </div>
          </nav>
    </Fragment>
  );
}

export default NavbarComp;
