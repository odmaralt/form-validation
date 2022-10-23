import React, { useEffect, useState } from "react";
import "./ProductsPage.css";
import axios from "axios";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import Product from "./Product";
import { theme } from "./Theme";
import { ThemeProvider } from "@emotion/react";
import {
  SearchBar,
  CreateModal,
  DeleteModal,
  UpdateModal,
  Header,
  Notification,
} from "../../components";

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

const ProductsPage = (user) => {
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalState, setModalState] = useState("");

  function openModal(text) {
    setModalIsOpen(true);
    setModalState(text);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const [selectedBox, setSelectedBox] = useState();
  const [deleteBox, setDeleteBox] = useState();
  const [success, setSuccess] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);
  const [updateBox, setUpdateBox] = useState();

  const [loading, setLoading] = useState(false);
  const [searchBar, setSearchBar] = useState("");
  // declare state with searchBar and setSearchBar
  useEffect(() => {
    if (searchBar !== "") {
      //if searchbar contains nothing, show all the posts
      axios
        .get("https://dummyapi.io/data/v1/post?limit=30", {
          headers: { "app-id": "6347516f7580f73d9c69995c   " },
        })
        .then((response) => {
          setData(
            response.data.data?.filter((post) => {
              //filter response.data.data

              if (
                searchBar.toLowerCase() === post.text.toLowerCase()
                //if searchbar equals first name, return post
              ) {
                return post;
              }
              //else return firstname includes searchbar
              return post.text.toLowerCase().includes(searchBar.toLowerCase());
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoading(true);
      axios
        .get("https://dummyapi.io/data/v1/post?limit=30", {
          headers: { "app-id": "6347516f7580f73d9c69995c   " },
        })
        .then((response) => {
          setLoading(true);
          setTimeout(() => {
            setData(response.data.data);
            setLoading(false);
          }, [800]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchBar]);
  //searchbar in brackets

  const handleClick = (e, id) => {
    e.preventDefault();
    setSelectedBox(id);
    setIsActive((current) => !current);
  };
  const handleDeleteModalOpen = (e, post) => {
    e.preventDefault();
    setDeleteBox(post);
    openModal("delete");
  };
  const handleUpdateModalOpen = (e, post) => {
    e.preventDefault();
    setUpdateBox(post);
    openModal("update");
  };
  const handleCreateModalOpen = (e, post) => {
    e.preventDefault();
    openModal("create");
  };

  const handleSearchBar = (value) => {
    setSearchBar(value);
  };
  // handlesearchbar takes value and sets search bar with the value

  return (
    <div id="productsPage">
      <Header user={user} />
      {loading && <div id="loading">...Loading</div>}
      <div className="flex">
        <SearchBar searchBar={searchBar} handleSearchBar={handleSearchBar} />
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="neutral"
            style={{ margin: "46px 0px 0px 835px", height: "50px" }}
            className="productsButton"
            onClick={(e) => handleCreateModalOpen(e)}
          >
            Create
          </Button>
        </ThemeProvider>
      </div>
      <div id="wholeProductDiv">
        {!loading &&
          data?.map((post) => (
            <Product
              post={post}
              handleClick={handleClick}
              selectedBox={selectedBox}
              handleDeleteModalOpen={handleDeleteModalOpen}
              handleUpdateModalOpen={handleUpdateModalOpen}
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
            deleteBox={deleteBox}
            closeModal={closeModal}
            setSuccess={setSuccess}
          />
        )}
        {modalState === "update" && (
          <UpdateModal
            updateBox={updateBox}
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
    </div>
  );
};
export default ProductsPage;
