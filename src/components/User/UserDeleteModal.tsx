/* eslint-disable @typescript-eslint/no-floating-promises */
import axios from "axios";
import { Theme } from "../../pages/PostsPage/Theme";
import React from "react";
import Button from "@mui/material/Button";
import { CloseIcon } from "../Icons/CloseIcon";
import { ThemeProvider } from "@emotion/react";

interface IUserDeleteModal {
  deleteBox:
    | {
        _id: string;
        picture: string;
        title: string;
        firstName: string;
        lastName: string;
      }
    | undefined;
  closeModal: () => void;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserDeleteModal: React.FC<IUserDeleteModal> = ({
  deleteBox,
  closeModal,
  setSuccess,
}) => {
  const deleteSelectedBox = async (id: string) => {
    await axios
      .delete(`https://dummyapi.io/data/v1/user/${id}`, {
        headers: { "app-id": "6347516f7580f73d9c69995c" },
      })
      .then((response) => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          window.location.reload();
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    deleteSelectedBox(id);
    closeModal();
  };
  return (
    <div style={{ width: "100%" }}>
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
          {deleteBox?.firstName}
          {} {deleteBox?.lastName}@apos;s post?
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
        <div>
          <ThemeProvider theme={Theme}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => closeModal()}
            >
              Cancel
            </Button>
          </ThemeProvider>
          <ThemeProvider theme={Theme}>
            <Button
              variant="contained"
              color="primary"
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
  );
};
