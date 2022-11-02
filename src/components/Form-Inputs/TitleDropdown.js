import React, { useState } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const titleData = ["mr", "ms", "mrs", "miss", "dr", ""];

export const TitleDropdown = ({ setUserTitle, userTitle }) => {
  const handleChange = (event) => {
    setUserTitle(event.target.value);
  };

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  return (
    <div>
      <FormControl
        sx={{ m: 1, minWidth: 350, minHeight: 0 }}
        size="small"
        style={{ height: "48px", marginLeft: "-2px", marginTop: "15px" }}
      >
        <InputLabel id="demo-simple-select-helper-label">Title</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userTitle}
          label="Title"
          onChange={handleChange}
        >
          {titleData.map((title) => {
            return <MenuItem value={title}>{capitalize(title)}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};
