import { Link } from "react-router-dom";
import { NavButtons, Nav, Title } from "./Styled-Components";

const Navigation = (props) => {
  const { logout } = props;
  return (
    <Nav>
      <div>
        <Title>Water my Plants</Title>
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
        <NavButtons>
          <Link to="/PlantList" className="navlinks">
            Plant List
          </Link>
        </NavButtons>
        <NavButtons>
          <Link to="/edituser" className="navlinks">
            Edit your info
          </Link>
        </NavButtons>
        <NavButtons>
          <Link to="#" onClick={logout} className="navlinks">
            Log Out
          </Link>
        </NavButtons>
      </div>
    </Nav>
  );
};

export default Navigation;
