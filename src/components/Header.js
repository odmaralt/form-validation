import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Team from "./Icons/Team";

export const Header = ({ user, whiteFont }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut();
    navigate("/sign-in");
  };
  const handleClickProductLink = () => {
    navigate("/products");
  };
  const handleClickUsersLink = () => {
    navigate("/users");
  };
  const handleClickServicesLink = () => {
    navigate("/services");
  };
  const handleClickContactLink = () => {
    navigate("/contact");
  };
  const handleClickTeamIcon = () => {
    navigate("/");
  };

  return (
    <div id={whiteFont ? "navBar1" : "navBar"}>
      <Team
        id="teamIcon"
        bluefilled={whiteFont}
        onClick={() => handleClickTeamIcon()}
      />
      <div id={whiteFont ? "navBarRight1" : "navBarRight"}>
        <p className="navItems" onClick={() => handleClickProductLink()}>
          Posts
        </p>{" "}
        <p className="navItems" onClick={() => handleClickUsersLink()}>
          Users
        </p>
        <p className="navItems" onClick={() => handleClickServicesLink()}>
          Blog
        </p>
        <p className="navItems" onClick={() => handleClickContactLink()}>
          Contact
        </p>
        <p className="navItems" onClick={() => handleLogout()}>
          {user ? "Log out" : "Log In"}
        </p>
      </div>
    </div>
  );
};
