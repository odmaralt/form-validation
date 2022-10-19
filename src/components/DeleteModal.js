import axios from "axios";
import React from "react";
import Button from "@mui/material/Button";
import CloseIcon from "./Icons/CloseIcon";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const DeleteModal = ({ deleteBox, closeModal }) => {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#0991f1",
        darker: "#053e85",
      },
      neutral: {
        main: " rgb(255, 180, 221)",
        contrastText: "#fff",
      },
    },
  });
  const deleteSelectedBox = async (id) => {
    await axios
      .delete(`https://dummyapi.io/data/v1/post/${id}`, {
        headers: { "app-id": "6347516f7580f73d9c69995c" },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    deleteSelectedBox(id);
    closeModal();
  };
  return (
    <div style={{ width: "500px" }}>
      <CloseIcon id="xButton" onClick={closeModal} />
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
          {deleteBox?.owner.firstName}
          {} {deleteBox?.owner.lastName}'s post?
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
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            style={{ margin: "35px 20px 30px 260px" }}
            color="neutral"
            onClick={() => closeModal()}
          >
            Cancel
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="neutral"
            onClick={(e) => handleDelete(e, deleteBox?.id)}
          >
            Delete
          </Button>
        </ThemeProvider>
      </form>
    </div>
  );
};

export default DeleteModal;
