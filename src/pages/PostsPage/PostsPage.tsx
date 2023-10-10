import React, { useEffect, useState } from "react";
import "./PostsPage.css";
import axios from "axios";
import Modal from "react-modal";

import { useNavigate } from "react-router";
import {
  SearchBar,
  CreateModal,
  DeleteModal,
  UpdateModal,
  Header,
  Notification,
  Footer,
} from "../../components";
import { PostPage } from "../PostPage/PostPage";
import Product from "./Post";

interface IPostsPage {
  user: boolean | undefined;
}

interface Post {
  _id: string;
  image: string;
  text: string;
  title: string;
  ownerId: string;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const PostsPage: React.FC<IPostsPage> = ({ user }) => {
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const [modalState, setModalState] = useState<string>("");
  const [selectedBox, setSelectedBox] = useState<Post>();
  const [deleteBox, setDeleteBox] = useState<Post>();
  const [success, setSuccess] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState<boolean>(false);
  const [createSuccess, setCreateSuccess] = useState<boolean>(false);
  const [updateBox, setUpdateBox] = useState<Post>({
    _id: "",
    text: "",
    title: "",
    ownerId: "",
    image: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [searchBar, setSearchBar] = useState<string>("");
  const navigate = useNavigate();

  const handlePostClick = (id: string) => {
    console.log(id);
    navigate(`/posts/${id}`);
  };

  // open modal gets text as prop
  // sets modal as open
  // the modal state takes text

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // close modal setsmodalopen as false so closes the modal
  useEffect(() => {
    if (searchBar !== "") {
      // if searchbar contains nothing, show all the posts
      axios
        .get("https://react-app-back-end.onrender.com/posts")
        .then((response) => {
          // if its succesfull setdata
          setData(
            response.data?.filter((post: Post) => {
              // filter response.data.data

              if (
                searchBar.toLowerCase() === post.title.toLowerCase()
                // if searchbar equals first name, return post.text
              ) {
                return post;
                // return post
              }
              // else return firstname includes searchbar
              return post.title.toLowerCase().includes(searchBar.toLowerCase());
              // return post.text and it includes searchbar
            })
          );
        })
        .catch((err) => {
          console.log(err);
        }); // catch and console.log error
    } else {
      // else setloading as true
      setLoading(true);
      axios
        .get("https://react-app-back-end.onrender.com/posts", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setLoading(true);
          setTimeout(() => {
            setData(response.data); // set the data with the data the user enters
            setLoading(false); // after the data has been set, set loading as false
          }); // loads for 0.8 sec
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchBar]);

  const handleSearchBar = (value: string) => {
    setSearchBar(value);
  };
  const handleDeleteModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
  };
  // handlesearchbar takes value and sets search bar with the value

  return (
    <div id="postsPage">
      <Header whiteFont={true} />

      <div className="flex">
        <div className="createButtonSearch">
          <div>
            <SearchBar
              searchBar={searchBar}
              handleSearchBar={handleSearchBar}
            />
          </div>
        </div>
      </div>
      <div id="wholePostDiv">
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {modalState === "delete" && (
          <DeleteModal
            open={modalIsOpen}
            deleteBox={deleteBox}
            closeModal={closeModal}
            setSuccess={setSuccess}
          />
        )}
        {modalState === "update" && (
          <UpdateModal
            updateBox={updateBox}
            open={false}
            setUpdateSuccess={setUpdateSuccess}
            closeUpdateModal={closeModal}
          />
        )}
        {modalState === "create" && (
          <CreateModal
            closeCreateModal={closeModal}
            setCreateSuccess={setCreateSuccess}
          />
        )}
      </Modal>
      {success && (
        <Notification
          text="You have successfully deleted the post"
          type="success"
        />
      )}
      {updateSuccess && (
        <Notification
          text="You have successfully updated the post"
          type="success"
        />
      )}
      {createSuccess && (
        <Notification
          text="You have successfully created a post"
          type="success"
        />
      )}
      <Footer />
    </div>
  );
};
