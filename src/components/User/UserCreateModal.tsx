/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
import axios from "axios";
import Button from "@mui/material/Button";
import { CloseIcon } from "../Icons/CloseIcon";
import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import { Theme } from "../../pages/PostsPage/Theme";
import { TitleDropdown } from "../Form-Inputs";

interface IUserCreateModal {
  closeCreateModal: () => void;
  setCreateSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}
const createUser = async (formValues?: any) => {
  await axios.post(`https://dummyapi.io/data/v1/user/create`, formValues, {
    // createpost is sending formvalues to the api
    headers: { "app-id": "6347516f7580f73d9c69995c" },
  });
};

export const UserCreateModal: React.FC<IUserCreateModal> = ({
  closeCreateModal,
  setCreateSuccess,
}) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    title: "",
    // picture: "",
    email: "",
  };
  const [userTitle, setUserTitle] = useState<string>("");

  const [formValues, setFormValues] = useState<{}>(initialValues); // formvalues takes initial values
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value, title: userTitle });
  };
  //   saving the user input onchange

  const handleCreateButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault(); // prevents page from refreshing after every change

    await createUser({
      ...formValues,
      picture:
        "https://images.unsplash.com/photo-1666809489595-512116e133aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    })
      .then(async (response) => {
        console.log(response);
        setCreateSuccess(true); // after u createpost, show the success alert and wait 2.5 seconds then refresh the screen
        await closeCreateModal();
        setTimeout(() => {
          setCreateSuccess(false);
          window.location.reload();
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      }); // if theres error, catch it and consolelog err
  };

  return (
    <div id="createDiv1">

      <div id="createBoxDiv">
        <p style={{ marginTop: "15px", fontSize: "18px", fontWeight: "600" }}>
          Create a user
        </p>
        <div>
          <TitleDropdown setUserTitle={setUserTitle} userTitle={userTitle} />
        </div>
        <div className="flex">
          <p>First Name:</p>
          <input name="firstName" onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="flex">
          <p>Last Name:</p>

          <input name="lastName" onChange={(e) => handleInputChange(e)} />
        </div>
        {/* <div className="flex">
          <p>Image link:</p>

          <input name="picture" onChange={(e) => handleInputChange(e)} />
        </div> */}
        <div className="flex">
          <p>Email:</p>

          <input name="email" onChange={(e) => handleInputChange(e)} />
        </div>
      </div>
      <form>
        <ThemeProvider theme={Theme}>
          <Button
            variant="contained"
            style={{ margin: "30px 20px 30px 160px" }}
            color="primary"
            onClick={() => closeCreateModal()}
          >
            Cancel
          </Button>
        </ThemeProvider>{" "}
        <ThemeProvider theme={Theme}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleCreateButton(e)}
          >
            Create
          </Button>
        </ThemeProvider>
      </form>
    </div>
  );
};
