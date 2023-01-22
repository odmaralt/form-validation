import { Footer, Header, Notification, CreateModal } from "../../components";
import "./MyPostsPage.css";
import Button from "@mui/material/Button";
import { Theme } from "../PostsPage/Theme";
import { ThemeProvider } from "@emotion/react";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useUserProvider } from "../../provider/UserProvider";
import { useNavigate } from "react-router";
import Product from "../PostsPage/Post";
interface Post {
  _id: string;
  image: string;
  text: string;
  title: string;
  ownerId: string;
}
export const MyPostsPage = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const [selectedBox, setSelectedBox] = useState<Post>();

  const [modalState, setModalState] = useState<string>("");
  const [createSuccess, setCreateSuccess] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const { userId } = useUserProvider();
  useEffect(() => {
    // else setloading as true
    axios
      .get(`http://localhost:5454/posts/${userId}/posts`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTimeout(() => {
          setData(response.data); // set the data with the data the user enters
        }); // loads for 0.8 sec
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();

  const handleMyPostClick = (id: string) => {
    console.log(id);
    navigate(`/myPosts/${id}`);
  };
  const openModal = (text: string) => {
    setModalIsOpen(true);
    setModalState(text);
  };
  const handleCreateModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    openModal("create"); // opens create modal
  };
  const handleDeleteModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    openModal("delete"); // opens create modal
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div id="myPostsPage">
      <Header whiteFont />
      <ThemeProvider theme={Theme}>
        <Button
          variant="contained"
          color="primary"
          style={{
            position: "absolute",
            right: "10vw",
            top: "20vh",
            height: "50px",
          }}
          className="postsButton"
          onClick={(e) => handleCreateModalOpen(e)}
        >
          Create
        </Button>
      </ThemeProvider>
      <div id="allMyPosts">
        {data?.map((post: Post) => (
          <Product
            key={post._id}
            post={post}
            handleClick={handleMyPostClick}
            selectedBox={selectedBox}
            handleDeleteModalOpen={handleDeleteModalOpen}
            handleUpdateModalOpen={closeModal}
          />
        ))}
      </div>
      <Footer />
      {createSuccess && (
        <Notification
          text="You have successfully created a post"
          type="success"
        />
      )}
      {modalState === "create" && (
        <Modal
          id="createModal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <CreateModal
            closeCreateModal={closeModal}
            setCreateSuccess={setCreateSuccess}
          />
        </Modal>
      )}
    </div>
  );
};
