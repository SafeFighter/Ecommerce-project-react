import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-primary-subtle ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="navbar-item p-1">
                <Link to="/5tor3/home" className="text-dark">
                  Home
                </Link>
              </li>
              <li className="navbar-item p-1">
                <Link to="/5tor3/categories" className="text-dark">
                  Categories
                </Link>
              </li>
              <li className="navbar-item p-1">
                <Link to="/5tor3/cart" className="text-dark">
                  <i className="bi bi-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
