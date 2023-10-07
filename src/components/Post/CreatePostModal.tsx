/* eslint-disable @typescript-eslint/no-misused-promises */
import axios from "axios";
import Button from "@mui/material/Button";
import { CloseIcon } from "../Icons/CloseIcon";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { UsersDropdown } from "../Form-Inputs";
import { array } from "yup";
import { Theme } from "../../pages/PostsPage/Theme";
import { UserProvider, useUserProvider } from "../../provider/UserProvider";
interface ICreateModal {
  closeCreateModal: () => void;
  setCreateSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const createPost = async (data: []) => {
  await axios.post(`http://localhost:5454/posts`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const initialValues = {
  text: "",
  image: "",
  title: "",
  ownerId: "",
  id: "",
};

export const CreateModal: React.FC<ICreateModal> = ({
  closeCreateModal,
  setCreateSuccess,
}) => {
  const [formValues, setFormValues] = useState<any>(initialValues); // formvalues takes initial values
  const [postOwner, setPostOwner] = useState<string>();
  const { userId } = useUserProvider();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value, ownerId: userId });
  };
  //   saving the user input onchange

  const handleCreateButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault(); //  prevents page from refreshing after every change
    const values = {
      ...formValues,
    };

    //  form values tags converts string into array by splitting it by the commas
    await createPost(values)
      .then(async (response) => {
        setCreateSuccess(true); //  after u createpost, show the success alert and wait 2.5 seconds then refresh the screen
        await closeCreateModal();
        setTimeout(() => {
          setCreateSuccess(false);
          window.location.reload();
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      }); //  if theres error, catch it and consolelog err
  };

  return (
    <div id="createDiv">

      <div id="createBoxDiv">
        <p style={{ marginTop: "15px", fontSize: "18px", fontWeight: "600" }}>
          Create a post
        </p>
        <div className="flex">
          <p>Title:</p>
          <input name="title" onChange={handleInputChange} />
        </div>
        <div className="flex">
          <p>Text:</p>

          <input name="text" onChange={handleInputChange} />
        </div>
        <div className="flex">
          <p>Image link:</p>

          <input name="image" onChange={handleInputChange} />
        </div>
      </div>
      <form>
        {" "}
        <ThemeProvider theme={Theme}>
          <Button
            variant="contained"
            id="createB"
            style={{
              margin: "30px 10px 0px 0px",
              backgroundColor: " rgb(59, 66, 87)",
            }}
            onClick={async (e) => await handleCreateButton(e)}
          >
            Create
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={Theme}>
          <Button
            variant="contained"
            id="cancelB"
            style={{
              margin: "30px 0px 0px",
              backgroundColor: " rgb(59, 66, 87)",
            }}
            onClick={() => closeCreateModal()}
          >
            Cancel
          </Button>
        </ThemeProvider>{" "}
      </form>
    </div>
  );
};
