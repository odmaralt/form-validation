/* eslint-disable @typescript-eslint/no-floating-promises */
import axios from "axios";
import React from "react";
import Button from "@mui/material/Button";
import { CloseIcon } from "../Icons/CloseIcon";
import { ThemeProvider } from "@emotion/react";
import { Modal } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router";

interface IDeleteModal {
  deleteBox:
    | {
        _id: string;
        title: string;
        ownerId: string;
        image: string;
        text: string;
      }
    | undefined;
  open: boolean;
  closeModal: () => void;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}
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

export const DeleteModal: React.FC<IDeleteModal> = ({
  deleteBox,
  closeModal,
  open,
  setSuccess,
}) => {
  const { postId } = useParams() as { postId: string };
  const navigate = useNavigate();
  const deleteSelectedBox = async () => {
    await axios
      .delete(`http://localhost:5454/posts/${postId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setSuccess(true);
        setTimeout(() => {
          navigate("/myPosts");
        }, 1500);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    deleteSelectedBox();
    closeModal();
  };
  return (
    <Modal
      open={open}
      onClose={closeModal}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div id="deleteModal">
        <div>
          <p
            style={{
              marginTop: "40px",
              fontSize: "17px",
              fontWeight: "600",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            Are you sure you want to delete {}
            {deleteBox?.title} post?
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "14px",
              fontWeight: "600",
              color: "grey",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            (This will permanently remove this post from the page!)
          </p>
        </div>
        <form>
          <div id="delCanButtons">
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                id="cancelButton"
                onClick={() => closeModal()}
              >
                Cancel
              </Button>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                id="cancelButton"
                onClick={(e) =>
                  handleDelete(e, deleteBox?._id != null ? deleteBox?._id : "")
                }
              >
                Delete
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </div>
    </Modal>
  );
};
