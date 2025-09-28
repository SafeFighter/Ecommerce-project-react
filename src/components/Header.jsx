import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/5tor3/home">Home</Link>
          </li>
          <li>
            <Link to="/5tor3/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
