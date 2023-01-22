import React, { useState } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const titleData = ["mr", "ms", "mrs", "miss", "dr", ""];

interface ITitleDropdown {
  setUserTitle: React.Dispatch<React.SetStateAction<string>>;
  userTitle: string;
  className?: string;
}
export const TitleDropdown: React.FC<ITitleDropdown> = ({
  setUserTitle,
  userTitle,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserTitle(event.target.value);
  };

  function capitalize (str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
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
          onChange={(e) => handleChange}
        >
          {titleData.map((title) => {
            return (
              <MenuItem key="uniqueKey" value={title}>
                {capitalize(title)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
