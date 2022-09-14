import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Message from "./Message";

interface Props {
  messages: { message: string; id: string | number }[];
}

const Messages: FunctionComponent<Props> = ({ messages }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
        {messages.map((m) => (
            <Message message={m} key={m.id} />
        ))}
    </Box>
  );
};

export default Messages;
