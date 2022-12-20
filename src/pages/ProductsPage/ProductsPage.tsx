import React, { useEffect, useState } from "react";
import "./ProductsPage.css";
import axios from "axios";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import Product from "./Product";
import { Theme } from "./Theme";
import { ThemeProvider } from "@emotion/react";
import {
  SearchBar,
  CreateModal,
  DeleteModal,
  UpdateModal,
  Header,
  Notification,
  Footer,
} from "../../components";

interface IProductsPage {
  user: boolean | undefined;
}

interface Post {
  id: string;
  owner: {
    firstName: string;
    lastName: string;
  };
  image: string;
  text: string;
  likes: number;
  tags: string[];
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

export const ProductsPage: React.FC<IProductsPage> = ({ user }) => {
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const [modalState, setModalState] = useState<string>("");
  const [selectedBox, setSelectedBox] = useState<Post>();
  const [deleteBox, setDeleteBox] = useState<Post>();
  const [success, setSuccess] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState<boolean>(false);
  const [createSuccess, setCreateSuccess] = useState<boolean>(false);
  const [updateBox, setUpdateBox] = useState<Post>();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchBar, setSearchBar] = useState<string>("");
  // declare state with searchBar and setSearchBar

  const openModal = (text: string) => {
    setModalIsOpen(true);
    setModalState(text);
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
        .get("https://dummyapi.io/data/v1/post?limit=30", {
          headers: { "app-id": "6347516f7580f73d9c69995c   " },
        }) // use axios to get the dummyapi link and a object has headers: in object app-id equals generated id
        .then((response) => {
          // if its succesfull setdata
          setData(
            response.data.data?.filter((post: Post) => {
              // filter response.data.data

              if (
                searchBar.toLowerCase() === post.text.toLowerCase()
                // if searchbar equals first name, return post.text
              ) {
                return post;
                // return post
              }
              // else return firstname includes searchbar
              return post.text.toLowerCase().includes(searchBar.toLowerCase());
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
        .get("https://dummyapi.io/data/v1/post?limit=30", {
          headers: { "app-id": "6347516f7580f73d9c69995c   " },
        }) // grab the dummyapi
        .then((response) => {
          setLoading(true);

          setTimeout(() => {
            setData(response.data.data); // set the data with the data the user enters
            setLoading(false); // after the data has been set, set loading as false
          }); // loads for 0.8 sec
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchBar]);
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    setSelectedBox(id as unknown as Post); // gets id of selectedbox
    setIsActive((current) => !current);
  };
  const handleDeleteModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    post: Post
  ) => {
    e.preventDefault();
    setDeleteBox(post); // opens specific post that was clicked
    openModal("delete"); // open delete modal
  };
  const handleUpdateModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    post: Post
  ) => {
    e.preventDefault();
    setUpdateBox(post); // opens specific post clicked to update
    openModal("update"); // opens update modal
  };
  const handleCreateModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    openModal("create"); // opens create modal
  };

  const handleSearchBar = (value: string) => {
    setSearchBar(value);
  };
  // handlesearchbar takes value and sets search bar with the value

  return (
    <div id="productsPage">
      <Header user={user} whiteFont={true} />

      <div className="flex">
        <div className="createButtonSearch">
          <div style={{ paddingLeft: "10%" }}>
            <SearchBar
              searchBar={searchBar}
              handleSearchBar={handleSearchBar}
            />
          </div>
          <ThemeProvider theme={Theme}>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "46px 0px 0px 0px", height: "50px" }}
              className="productsButton"
              onClick={(e) => handleCreateModalOpen(e)}
            >
              Create
            </Button>
          </ThemeProvider>
        </div>
      </div>
      {loading && (
        <div style={{ height: "100vh" }} id="loading">
          ...Loading
        </div>
      )}
      <div id="wholeProductDiv">
        {!loading &&
          data?.map((post: Post) => (
            <Product
              key={post.id}
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
      <Footer />
    </div>
  );
};
