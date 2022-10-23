import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import React from "react";

export const Notification = ({ text, type }) => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Alert
        severity={type}
        color={type}
        style={{ position: "fixed", bottom: "0vh" }}
      >
        {text}
      </Alert>
    </Stack>
  );
};
