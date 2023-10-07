/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
import axios from "axios";
import { ThemeProvider } from "@emotion/react";
import { Button, Modal } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { CloseIcon } from "../Icons/CloseIcon";
import { Theme } from "../../pages/PostsPage/Theme";
import { useParams } from "react-router";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0991f1",
      dark: "#053e85",
    },
    warning: {
      main: "#e53e3e",
    },
    common: {
      black: "rgb(87, 101, 131)",
      white: "#fff",
    },
  },
});
interface IUpdateModal {
  updateBox: {
    _id: string;
    title: string;
    ownerId: string;
    image: string;
    text: string;
  };

  closeUpdateModal: () => void;
  open: boolean;
  setUpdateSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Post {
  _id: string;
  title: string;
  ownerId: string;
  image: string;
  text: string;
}
export const UpdateModal: React.FC<IUpdateModal> = ({
  updateBox,
  closeUpdateModal,
  open,
  setUpdateSuccess,
}) => {
  const { postId } = useParams() as { postId: string };

  const updateSelectedBox = async (post: Post) => {
    await axios
      .put(`http://localhost:5454/posts/${postId}`, { ...formValues })
      .then((response) => {
        setUpdateSuccess(true);
        setTimeout(() => {
          setUpdateSuccess(false);
          window.location.reload();
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  const [formValues, setFormValues] = useState<Post>({
    image: "",
    text: "",
    title: "",
    ownerId: "",
    _id: "",
  });

  useEffect(() => {
    setFormValues(updateBox);
  }, [updateBox]);

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleUpdate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const data = {
      ...updateBox,
    };
    e.preventDefault();
    await updateSelectedBox(data as Post)
      .then((response) => {
        closeUpdateModal();
      })
      .catch((err) => console.log(err));
  };
  return (
    <Modal
      open={open}
      onClose={closeUpdateModal}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div id="updateDiv">

        <div id="updateBoxDiv">
          <h1
            style={{ paddingTop: "35px", fontSize: "18px", fontWeight: "600" }}
          >
            Update the post
          </h1>
          <div className="flex">
            <p>Title:</p>
            <input
              value={formValues?.title}
              onChange={getInputValue}
              name="title"
            />
          </div>
          <div className="flex">
            <p>Caption:</p>
            <input
              value={formValues?.text}
              onChange={getInputValue}
              name="text"
            />
          </div>
          <div className="flex">
            <p>Image Link:</p>
            <input
              value={formValues?.image}
              name="image"
              onChange={getInputValue}
            />
          </div>
        </div>
        <form>
          <div id="updCanButton">
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                id="cancelButton"
                onClick={closeUpdateModal}
              >
                Cancel
              </Button>
            </ThemeProvider>{" "}
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                id="cancelButton"
                onClick={(e) => handleUpdate(e)}
              >
                Update
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </div>
    </Modal>
  );
};
