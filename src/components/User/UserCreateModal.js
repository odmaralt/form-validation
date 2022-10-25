import axios from "axios";
import React from "react";
import Button from "@mui/material/Button";
import CloseIcon from "../Icons/CloseIcon";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import { theme } from "../../pages/ProductsPage/Theme";
const createPost = async (formValues) => {
  await axios
    .post(`https://dummyapi.io/data/v1/post/create`, formValues, {
      //createpost is sending formvalues to the api
      headers: { "app-id": "6347516f7580f73d9c69995c" },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
};

const initialValues = {
  text: "",
  image: "",
  likes: 0,
  tags: [],
  owner: "60d0fe4f5311236168a10a1a",
};

export const UserCreateModal = ({ closeCreateModal, setCreateSuccess }) => {
  const [formValues, setFormValues] = useState(initialValues); //formvalues takes initial values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  //   saving the user input onchange

  const handleCreateButton = async (e) => {
    e.preventDefault(); //prevents page from refreshing after every change
    const values = { ...formValues, tags: formValues.tags.split(",") };
    //form values tags converts string into array by splitting it by the commas
    await createPost(values)
      .then(async (response) => {
        setCreateSuccess(true); //after u createpost, show the success alert and wait 2.5 seconds then refresh the screen
        await closeCreateModal();
        setTimeout(() => {
          setCreateSuccess(false);
          window.location.reload();
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      }); //if theres error, catch it and consolelog err
  };

  return (
    <div id="createDiv">
      <CloseIcon id="xButton" onClick={closeCreateModal} />

      <div id="createBoxDiv">
        <p style={{ marginTop: "15px", fontSize: "18px", fontWeight: "600" }}>
          Create a post
        </p>
        <div className="flex">
          <p>Caption:</p>
          <input name="text" onChange={handleInputChange} />
        </div>
        <div className="flex">
          <p>Tags:</p>

          <input name="tags" onChange={handleInputChange} />
        </div>
        <div className="flex">
          <p>Image link:</p>

          <input name="image" onChange={handleInputChange} />
        </div>
        <div className="flex">
          <p>Likes:</p>

          <input name="likes" type="number" onChange={handleInputChange} />
        </div>
      </div>
      <form>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            style={{ margin: "30px 20px 30px 160px" }}
            color="neutral"
            onClick={() => closeCreateModal()}
          >
            Cancel
          </Button>
        </ThemeProvider>{" "}
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="neutral"
            onClick={handleCreateButton}
          >
            Create
          </Button>
        </ThemeProvider>
      </form>
    </div>
  );
};
