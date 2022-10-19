import axios from "axios";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import CloseIcon from "./Icons/CloseIcon";
const UpdateModal = ({ updateBox, closeUpdateModal }) => {
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
  const updateSelectedBox = async (post) => {
    await axios
      .put(
        `https://dummyapi.io/data/v1/post/${post.id}`,
        { ...post },
        {
          headers: { "app-id": "6347516f7580f73d9c69995c" },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    updateSelectedBox(id);
    closeUpdateModal();
  };
  return (
    <div id="updateDiv">
      <CloseIcon id="xButton" onClick={closeUpdateModal} />

      <div id="updateBoxDiv">
        <p style={{ marginTop: "15px", fontSize: "18px", fontWeight: "600" }}>
          Update the post
        </p>
        <div className="flex">
          <p>First Name:</p>
          <input defaultValue={updateBox?.owner.firstName} />
        </div>
        <div className="flex">
          <p>Last Name:</p>
          <input defaultValue={updateBox?.owner.lastName} />
        </div>
        <div className="flex">
          <p>Caption:</p>
          <input defaultValue={updateBox?.text} />
        </div>
        <div className="flex">
          <p>Tags:</p>

          <input defaultValue={updateBox?.tags} />
        </div>
      </div>
      <form>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            style={{ margin: "30px 20px 30px 160px" }}
            color="neutral"
            onClick={closeUpdateModal}
          >
            Cancel
          </Button>
        </ThemeProvider>{" "}
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="neutral"
            onClick={(e) => handleUpdate(e, updateBox)}
          >
            Update
          </Button>
        </ThemeProvider>
      </form>
    </div>
  );
};

export default UpdateModal;
