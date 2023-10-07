import React, { useState, useEffect } from "react";
import { Header, Footer } from "../../components";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./LandingPage.css";
import Product from "../PostsPage/Post";
interface Post {
  _id: string;
  image: string;
  text: string;
  title: string;
  ownerId: string;
}
export const LandingPage: React.FC = () => {
  const [data, setData] = useState([]);
  const [selectedBox, setSelectedBox] = useState<Post>();

  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  useEffect(() => {
    axios
      .get("http://localhost:5454/posts", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data); // set the data with the data the user enters
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  const handleViewMoreClick = () => {
    navigate("/posts");
  };
  const handlePostClick = (id: string) => {
    navigate(`/posts/${id}`);
  };
  const handleDeleteModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <div id="firstPage">
        <Header />

        <div id="firstPageLeftSpace">
          <h1 id="collab">Instant collaborations </h1>
          <h1 id="allInOne">
            All in one for your remote team chats, collaboration and track
            projects
          </h1>
          <div id="inputAndButtonDiv">
            <input id="inputs" placeholder="Email"></input>
            <button id="buttons">Get early access</button>
          </div>
        </div>
      </div>
      <div id="five">
        {data?.map((post: Post) => (
          <Product
            key={post._id}
            post={post}
            handleClick={handlePostClick}
            selectedBox={selectedBox}
            handleDeleteModalOpen={handleDeleteModalOpen}
            handleUpdateModalOpen={closeModal}
          />
        ))}
      </div>
      <div>
        <Button
          variant="contained"
          style={{
            margin: "-60px 20px 0px 0px",
            height: "50px",
            backgroundColor: "rgb(59, 66, 87)",
          }}
          className="seeMoreButton"
          onClick={handleViewMoreClick}
        >
          VIEW MORE
        </Button>{" "}
      </div>
      <Footer />
    </div>
  );
};
