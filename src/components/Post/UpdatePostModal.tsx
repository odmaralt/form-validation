import axios from "axios";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import { CloseIcon } from "../Icons/CloseIcon";
import { Theme } from "../../pages/ProductsPage/Theme";

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
  updateBox:
    | {
        id: string;
        owner: {
          firstName: string;
          lastName: string;
        };
        image: string;
        text: string;
        likes: number;
        tags: string[];
      }
    | undefined;
  closeUpdateModal: () => void;
  setUpdateSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}
type Post = {
  id: string;
  owner: {
    firstName: string;
    lastName: string;
  };
  image: string;
  text: string;
  likes: number;
  tags: string[];
};
export const UpdateModal: React.FC<IUpdateModal> = ({
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
  const updateSelectedBox = async (post: Post) => {
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

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleUpdate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(formValues);
    const data = {
      ...updateBox,
      text: formValues.caption,
      tags: formValues.tags,
    };
    e.preventDefault();
    await updateSelectedBox(data as Post)
      .then((response) => {
        closeUpdateModal();
      })
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
            color="primary"
            onClick={() => closeUpdateModal()}
          >
            Cancel
          </Button>
        </ThemeProvider>{" "}
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleUpdate(e)}
          >
            Update
          </Button>
        </ThemeProvider>
      </form>
    </div>
  );
};
