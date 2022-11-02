import { Footer, Header } from "../../components";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Button } from "@mui/material";
import "./UsersPage.css";

import {
  UserUpdateModal,
  UserCreateModal,
  Notification,
  UserDeleteModal,
  SearchBar,
} from "../../components";
import { theme } from "../ProductsPage/Theme";
import { ThemeProvider } from "@mui/system";
import Modal from "react-modal/lib/components/Modal";
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
export const UsersPage = (user) => {
  const [data, setData] = useState([]);
  const [modalState, setModalState] = useState("");
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [deleteBox, setDeleteBox] = useState();
  const [updateBox, setUpdateBox] = useState();
  const [createBox, setCreateBox] = useState();
  const [loading, setLoading] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [valueOfSearchbar, setValueOfSearchbar] = useState("");
  const [createSuccess, setCreateSuccess] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selectedBox, setSelectedBox] = useState();
  const [searchBar, setSearchBar] = useState("");
  function openModal(text) {
    setModalIsOpen(true);
    setModalState(text);
  }
  //open modal gets text as prop
  //sets modal as open
  //the modal state takes text

  function closeModal() {
    setModalIsOpen(false);
  }
  const handleDeleteModalOpen = (e, user) => {
    e.preventDefault();
    setDeleteBox(user); //opens specific post that was clicked
    openModal("delete"); //open delete modal
  };
  const handleUpdateModalOpen = (e, user) => {
    e.preventDefault();
    setUpdateBox(user); //opens specific post that was clicked
    openModal("update"); //open delete modal
  };
  const handleCreateModalOpen = (e, user) => {
    e.preventDefault();
    openModal("create"); //open delete modal
  };
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user?created=1", {
        headers: { "app-id": "6347516f7580f73d9c69995c " },
      })
      .then((response) => {
        console.log(response);
        setLoading(true);
        setTimeout(() => {
          setData(response.data.data);
          setFilterData(response.data.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => <Notification text={err.message} type="error" />);

    // if (searchBar !== "") {
    //   //if searchbar contains nothing, show all the posts
    //   axios
    //     .get("https://dummyapi.io/data/v1/user?created=1", {
    //       headers: { "app-id": "6347516f7580f73d9c69995c   " },
    //     }) //use axios to get the dummyapi link and a object has headers: in object app-id equals generated id
    //     .then((response) => {
    //       //if its succesfull setdata
    //       setLoading(true);

    //       setData(

    //         response.data.data?.filter((user) => {
    //           //filter response.data.data

    //           if (
    //             searchBar.toLowerCase() === user.firstName.toLowerCase()
    //             //if searchbar equals first name, return post.text
    //           ) {
    //             return user;
    //             //return post
    //           }
    //           //else return firstname includes searchbar
    //           return user.firstName
    //             .toLowerCase()
    //             .includes(searchBar.toLowerCase());
    //           //return post.text and it includes searchbar
    //         })
    //       );
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     }); //catch and console.log error
    // } else {
    //   setLoading(true);
    //   axios
    //     .get("https://dummyapi.io/data/v1/user?limit=10&created=1", {
    //       headers: { "app-id": "6347516f7580f73d9c69995c" },
    //     }) //grab the dummyapi
    //     .then((response) => {
    //       setData(response.data.data);
    //       setLoading(false);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       setLoading(false);
    //     });
    // }
  }, []);
  useEffect(() => {
    filtered(valueOfSearchbar);
  }, [valueOfSearchbar]);

  const filtered = (e) => {
    const filtered =
      data &&
      data.filter((item) => {
        const dataItems =
          item.owner.title +
          " " +
          item.owner.firstName +
          " " +
          item.owner.lastName;
        const filteredItem = dataItems.toLowerCase().includes(e.toLowerCase());
        return filteredItem;
      });
    setFilterData(filtered);
    console.log(filtered);
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    setSelectedBox(id); //gets id of selectedbox
    setIsActive((current) => !current);
  };
  const handleSearchBar = (value) => {
    setSearchBar(value);
  };
  return (
    <div style={{ backgroundColor: "#d7ddf2" }}>
      <Header whiteFont={true} user={user} />
      <div id="wholeUserDiv">
        <div className="flex">
          <div id="createButtonSearch">
            <SearchBar
              searchBar={searchBar}
              handleSearchBar={handleSearchBar}
            />
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="neutral"
                style={{ margin: "46px 0px 0px 0px", height: "50px" }}
                className="productsButton"
                onClick={(e) => handleCreateModalOpen(e)}
              >
                Create
              </Button>
            </ThemeProvider>
          </div>
        </div>{" "}
        {data?.map((user) => {
          return (
            <div key={user.id}>
              <div id="userDivs" onClick={(e) => handleClick(e, user.id)}>
                <div id="imgDiv">
                  <img
                    id="userImages"
                    width={"100%"}
                    height={"180px"}
                    src={user.picture}
                    alt="person"
                  />
                </div>

                <div id="userName">
                  <p>
                    {user.title} {user.firstName} {user.lastName}
                  </p>
                </div>
              </div>

              {selectedBox === user.id && (
                <div className="usersButton">
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      color="neutral"
                      onClick={(e) => handleDeleteModalOpen(e, user)}
                    >
                      Delete
                    </Button>
                  </ThemeProvider>
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      color="neutral"
                      onClick={(e) => handleUpdateModalOpen(e, user)}
                    >
                      Update
                    </Button>
                  </ThemeProvider>
                </div>
              )}
            </div>
          );
        })}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {modalState === "delete" && (
            <UserDeleteModal
              deleteBox={deleteBox}
              closeModal={closeModal}
              setSuccess={setSuccess}
            />
          )}
          {modalState === "update" && (
            <UserUpdateModal
              updateBox={updateBox}
              closeUpdateModal={closeModal}
              setUpdateSuccess={setUpdateSuccess}
            />
          )}
          {modalState === "create" && (
            <UserCreateModal
              createBox={createBox}
              closeCreateModal={closeModal}
              setCreateSuccess={setCreateSuccess}
            />
          )}
        </Modal>{" "}
        {success && (
          <Notification
            text="You have successfully deleted the user"
            type="success"
          />
        )}
        {updateSuccess && (
          <Notification
            text="You have successfully updated the user"
            type="success"
          />
        )}
        {createSuccess && (
          <Notification
            text="You have successfully created the user"
            type="success"
          />
        )}
      </div>{" "}
      <Footer />
    </div>
  );
};
