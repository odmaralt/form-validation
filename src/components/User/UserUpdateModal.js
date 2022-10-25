import axios from "axios";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import CloseIcon from "../Icons/CloseIcon";
import { theme } from "../../pages/ProductsPage/Theme";

export const UserUpdateModal = ({
  updateBox,
  closeUpdateModal,
  setUpdateSuccess,
}) => {
  const initialValues = {
    firstName: updateBox?.firstName,
    lastName: updateBox?.lastName,
    picture: updateBox?.picture,
    id: updateBox?.id,
  };
  const updateSelectedBox = async (user) => {
    await axios
      .put(
        `https://dummyapi.io/data/v1/user/${user.id}`,
        { ...formValues },
        {
          headers: { "app-id": "6347516f7580f73d9c69995c" },
        }
      )
      .then((response) => {
        console.log(response);
        setUpdateSuccess(true);
        setTimeout(() => {
          setUpdateSuccess(false);
          window.location.reload();
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  const [formValues, setFormValues] = useState(initialValues);

  const getInputValue = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleUpdate = async (e) => {
    const data = {
      ...updateBox,
    };
    e.preventDefault();
    await updateSelectedBox(data)
      .then((response) => closeUpdateModal())
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
            onChange={getInputValue}
            value={formValues.firstName}
            name="firstName"
          />
        </div>
        <div className="flex">
          <p>Last Name:</p>
          <input
            onChange={getInputValue}
            value={formValues.lastName}
            name="lastName"
          />
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
