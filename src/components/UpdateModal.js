import axios from "axios";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import CloseIcon from "./Icons/CloseIcon";

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

export const UpdateModal = ({
  updateBox,
  closeUpdateModal,
  setUpdateSuccess,
}) => {
  const initialValues = {
    name: updateBox?.owner.firstName,
    lastName: updateBox?.owner.lastName,
    caption: updateBox?.text,
    tags: updateBox?.tags,
    id: updateBox?.id,
  };
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
        setUpdateSuccess(true);
        setTimeout(() => {
          setUpdateSuccess(false);
          window.location.reload();
        }, 2500);
      })
      .catch((err) => console.log(err));
  };

  const [formValues, setFormValues] = useState(initialValues);

  const getInputValue = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleUpdate = async (e) => {
    console.log(formValues);
    const data = {
      ...updateBox,
      text: formValues.caption,
      tags: formValues.tags,
    };
    e.preventDefault();
    await updateSelectedBox(data)
      .then(
        (response) => console.log(response),
        updateSelectedBox(),
        closeUpdateModal()
      )
      .catch((err) => console.log(err));
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
          <input
            style={{ color: "grey" }}
            value={formValues.name}
            name="name"
            disabled
          />
        </div>
        <div className="flex">
          <p>Last Name:</p>
          <input
            style={{ color: "grey" }}
            disabled
            value={formValues.lastName}
            name="lastName"
          />
        </div>
        <div className="flex">
          <p>Caption:</p>
          <input
            value={formValues.caption}
            name="caption"
            onChange={getInputValue}
          />
        </div>
        <div className="flex">
          <p>Tags:</p>

          <input value={formValues.tags} name="tags" onChange={getInputValue} />
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
          <Button variant="contained" color="neutral" onClick={handleUpdate}>
            Update
          </Button>
        </ThemeProvider>
      </form>
    </div>
  );
};
