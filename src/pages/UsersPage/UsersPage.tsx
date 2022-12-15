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
import { Theme } from "../ProductsPage/Theme";
import { ThemeProvider } from "@mui/system";
import Modal from "react-modal";
type Item = {
  owner: {
    firstName: string;
    title: string;
    lastName: string;
  };
};
interface IUsersPage {
  user: boolean | undefined;
}
type User = {
  id: string;
  picture: string;
  title: string;
  firstName: string;
  lastName: string;
};
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
export const UsersPage: React.FC<IUsersPage> = ({ user }) => {
  const [data, setData] = useState([]);
  const [modalState, setModalState] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const [deleteBox, setDeleteBox] = useState<User>();
  const [updateBox, setUpdateBox] = useState<User>();
  const [createBox, setCreateBox] = useState<User>();
  const [loading, setLoading] = useState(false);
  const [filterData, setFilterData] = useState<{}[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [valueOfSearchbar, setValueOfSearchbar] = useState("");
  const [createSuccess, setCreateSuccess] = useState<boolean>(false);
  const [updateSuccess, setUpdateSuccess] = useState<boolean>(false);
  const [isActive, setIsActive] = useState(false);
  const [selectedBox, setSelectedBox] = useState<string>();
  const [searchBar, setSearchBar] = useState<string>("");
  function openModal(text: string) {
    setModalIsOpen(true);
    setModalState(text);
  }
  //open modal gets text as prop
  //sets modal as open
  //the modal state takes text

  function closeModal() {
    setModalIsOpen(false);
  }
  const handleDeleteModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    user: User
  ) => {
    e.preventDefault();
    setDeleteBox(user); //opens specific post that was clicked
    openModal("delete"); //open delete modal
  };
  const handleUpdateModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    user: User
  ) => {
    e.preventDefault();
    setUpdateBox(user); //opens specific post that was clicked
    openModal("update"); //open delete modal
  };
  const handleCreateModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
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
  }, []);
  useEffect(() => {
    filtered(valueOfSearchbar);
  }, [valueOfSearchbar]);

  const filtered = (value: string) => {
    const filtered =
      data &&
      data.filter((item: Item) => {
        const dataItems =
          item.owner.title +
          " " +
          item.owner.firstName +
          " " +
          item.owner.lastName;
        const filteredItem = dataItems
          .toLowerCase()
          .includes(value.toLowerCase());
        return filteredItem;
      });
    setFilterData(filtered);
    console.log(filtered);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    setSelectedBox(id); //gets id of selectedbox
    setIsActive((current) => !current);
  };
  const handleSearchBar = (value: string) => {
    setSearchBar(value);
  };
  return (
    <div style={{ backgroundColor: "#f5f7fa " }}>
      <Header whiteFont={true} user={user} />
      <div id="wholeUserDiv">
        <div className="flex">
          <div id="createButtonSearch">
            <SearchBar
              searchBar={searchBar}
              handleSearchBar={handleSearchBar}
            />
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
        </div>{" "}
        {data?.map((user: User) => {
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
                  <ThemeProvider theme={Theme}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={(e) => handleDeleteModalOpen(e, user)}
                    >
                      Delete
                    </Button>
                  </ThemeProvider>
                  <ThemeProvider theme={Theme}>
                    <Button
                      variant="contained"
                      color="primary"
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
