import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "./UsersPage.css";

import {
  UserUpdateModal,
  UserCreateModal,
  Notification,
  UserDeleteModal,
  SearchBar,
  Footer,
  Header,
} from "../../components";
import { Theme } from "../PostsPage/Theme";
import { ThemeProvider } from "@mui/system";
import Modal from "react-modal";
interface Item {
  owner: {
    firstName: string;
    title: string;
    lastName: string;
  };
}
interface IUsersPage {
  user: boolean | undefined;
}
interface User {
  _id: string;
  picture: string;
  title: string;
  firstName: string;
  lastName: string;
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
export const UsersPage: React.FC<IUsersPage> = ({ user }) => {
  const [data, setData] = useState([]);
  const [modalState, setModalState] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const [deleteBox, setDeleteBox] = useState<User>();
  const [updateBox, setUpdateBox] = useState<User>();
  const [loading, setLoading] = useState(false);
  const [filterData, setFilterData] = useState<Array<Record<string, never>>>(
    []
  );
  const [success, setSuccess] = useState<boolean>(false);
  const [valueOfSearchBar, setValueOfSearchbar] = useState("");
  const [createSuccess, setCreateSuccess] = useState<boolean>(false);
  const [updateSuccess, setUpdateSuccess] = useState<boolean>(false);
  const [isActive, setIsActive] = useState(false);
  const [selectedBox, setSelectedBox] = useState<string>();
  const [searchBar, setSearchBar] = useState<string>("");
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
  const handleDeleteModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    selectedUser: User
  ) => {
    e.preventDefault();
    setDeleteBox(selectedUser); // opens specific post that was clicked
    openModal("delete"); // open delete modal
  };
  const handleUpdateModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    selectedUser: User
  ) => {
    e.preventDefault();
    setUpdateBox(selectedUser); // opens specific post that was clicked
    openModal("update"); // open delete modal
  };
  const handleCreateModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    openModal("create"); // open delete modal
  };
  useEffect(() => {
    axios
      .get("http://localhost:5454/users")
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

  const filteredData = (value: string) => {
    const filtered = data.filter((item: Item) => {
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
  };

  useEffect(() => {
    filteredData(valueOfSearchBar);
  }, [valueOfSearchBar]);

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    setSelectedBox(id); // gets id of selectedbox
    setIsActive((current) => !current);
  };
  const handleSearchBar = (value: string) => {
    setSearchBar(value);
  };
  return (
    <div style={{ backgroundColor: "#f5f7fa " }}>
      <Header whiteFont={true} />
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
                className="postsButton"
                onClick={(e) => handleCreateModalOpen(e)}
              >
                Create
              </Button>
            </ThemeProvider>
          </div>
        </div>{" "}
        {data?.map((dataUser: User) => {
          return (
            <div key={dataUser._id}>
              <div id="userDivs" onClick={(e) => handleClick(e, dataUser._id)}>
                <div id="imgDiv">
                  <img
                    id="userImages"
                    width={"100%"}
                    height={"180px"}
                    src={dataUser.picture}
                    alt="person"
                  />
                </div>

                <div id="userName">
                  <p>
                    {dataUser.title} {dataUser.firstName} {dataUser.lastName}
                  </p>
                </div>
              </div>

              {selectedBox === dataUser._id && (
                <div className="usersButton">
                  <ThemeProvider theme={Theme}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={(e) => handleDeleteModalOpen(e, dataUser)}
                    >
                      Delete
                    </Button>
                  </ThemeProvider>
                  <ThemeProvider theme={Theme}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={(e) => handleUpdateModalOpen(e, dataUser)}
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
