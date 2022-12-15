import Alert, { AlertColor } from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import React from "react";
interface INotification {
  text: string;
  type: "success" | "info" | "warning" | "error" | undefined;
}
export const Notification: React.FC<INotification> = ({ text, type }) => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Alert
        severity={type as AlertColor}
        color={type}
        style={{ position: "fixed", bottom: "0vh" }}
      >
        {text}
      </Alert>
    </Stack>
  );
};
