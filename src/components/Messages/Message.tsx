import React, { FC } from "react";
import { Box, styled } from "@mui/material";

interface MessageItem {
  message: { message: string; id: string | number };
}

const SingleMessage = styled(Box)`
  width: 300px;
  border-radius: 10px;
  background: #2159c2;
  font-weight: 400;
  font-size: 20px;
  color: #fff;
  padding: 5px 15px;
  margin: 5px auto 0 auto;

  div {
    font-size: 16px;
    line-height: 20px;
    color: #f3e7a2;
  }
`;

const Message: FC<MessageItem> = ({ message }) => {

  return (
    <>
      <SingleMessage>
         {message.message}
      </SingleMessage>
    </>
  );
};

export default Message;
