import { Link } from "react-router-dom";
import { NavButtons, Nav } from "./Styled-Components";

const Navigation = () => {
  return (
    <Nav>
      <div>
        <h1>Water my Plants</h1>
      </div>
      <div>
        <NavButtons>
          <Link to="/" className="navlinks">
            Home
          </Link>
        </NavButtons>
        <NavButtons>
          <Link to="/signup" className="navlinks">
            Sign Up
          </Link>
        </NavButtons>
        <NavButtons>
          <Link to="/login" className="navlinks">
            Log In
          </Link>
        </NavButtons>
        <NavButtons>
          <Link to="/plants" className="navlinks">
            My Plants
          </Link>
        </NavButtons>
      </div>
    </Nav>
  );
};

export default Navigation;
