/* eslint-disable @typescript-eslint/no-misused-promises */
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { Team } from "./Icons/Team";
import React from "react";
import { useUserProvider } from "../provider/UserProvider";
import Cookies from "js-cookie";

interface IHeader {
  whiteFont?: boolean;
}
export const Header: React.FC<IHeader> = ({ whiteFont }) => {
  const navigate = useNavigate();
  const { user } = useUserProvider();
  const handleLogout = async () => {
    Cookies.remove("userToken");
    navigate("/sign-in");
  };
  const handleClickPostsLink = () => {
    navigate("/posts");
  };
  const handleClickContactLink = () => {
    navigate("/contact");
  };
  const handleClickTeamIcon = () => {
    navigate("/");
  };
  const handleClickMyPostsLink = () => {
    navigate("/myPosts");
  };

  return (
    <div id={whiteFont ?? false ? "navBar1" : "navBar"}>
      <Team
        id="teamIcon"
        bluefilled={whiteFont}
        onClick={() => handleClickTeamIcon()}
      />
      <div id={whiteFont ?? false ? "navBarRight1" : "navBarRight"}>
        <p className="navItems" onClick={() => handleClickPostsLink()}>
          Posts
        </p>{" "}
        <p className="navItems" onClick={() => handleClickMyPostsLink()}>
          MyPosts
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
