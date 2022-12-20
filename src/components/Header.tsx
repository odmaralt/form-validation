/* eslint-disable @typescript-eslint/no-misused-promises */
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { Team } from "./Icons/Team";
import React from "react";

interface IHeader {
  user: boolean | undefined;
  whiteFont?: boolean;
}
export const Header: React.FC<IHeader> = ({ user, whiteFont }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await auth.signOut();
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
    <div id={whiteFont ?? false ? "navBar1" : "navBar"}>
      <Team
        id="teamIcon"
        bluefilled={whiteFont}
        onClick={() => handleClickTeamIcon()}
      />
      <div id={whiteFont ?? false ? "navBarRight1" : "navBarRight"}>
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
        <p className="navItems" onClick={async () => await handleLogout()}>
          {user ?? false ? "Log out" : "Log In"}
        </p>
      </div>
    </div>
  );
};
