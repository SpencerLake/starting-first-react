import './Navbar.css';

function Navbar(props) {
    return (

          <nav className="header-menu">
              <div className="container">
                <a className="navbar-brand" href="#page-top">
                    <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="..." className="menu-start-bootstrap" />
                </a>
                <ul className="navbar-nav">
                    <li className="menu-text">SERVICES</li>
                    <li className="menu-text">PORTFOLIO</li>
                    <li className="menu-text menu-text">ABOUT</li>
                    <li className="menu-text">TEAM</li>
                    <li className="menu-text">CONTACT</li>
                </ul>
              </div>
          </nav>

    );
  }

  export default Navbar;