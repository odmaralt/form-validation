import React, { useEffect, useState } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import axios from "axios";
import { Notification } from "../Notification";

export const UsersDropdown = ({ setPostOwner, postOwner }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user?created=1", {
        headers: { "app-id": "6347516f7580f73d9c69995c " },
      })
      .then((response) => {
        setLoading(true);
        setTimeout(() => {
          setData(response.data.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => <Notification text={err.message} type="error" />);
  }, []);

  const handleChange = (event) => {
    setPostOwner(event.target.value);
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, minWidth: 350, minHeight: 0 }}
        size="small"
        style={{ height: "48px", marginLeft: "-2px", marginTop: "15px" }}
      >
        <InputLabel id="demo-simple-select-helper-label">Users</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={postOwner}
          label="Users"
          onChange={handleChange}
        >
          {data?.map((user) => {
            return (
              <MenuItem key={user.id} value={user.id} defaultValue="">
                {user.firstName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
