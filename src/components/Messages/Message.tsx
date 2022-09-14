import React, {FC} from 'react';
import { styled, Typography} from "@mui/material";

interface MessageItem {
    message: { message:string, id: string | number}
}


  const SingleMessage = styled(Typography)`
    width: 300px;
    border-radius: 10px;
    background: #2159c2;
    font-weight: 400;
    font-size: 20px;
    color: #fff;
    padding: 0 10px;
    text-align: center;
    margin: 5px auto 0 auto;
  `



const Message:FC<MessageItem> = ({message}) => {
    return (
        <SingleMessage >
                {message.message}
        </SingleMessage>
    );
};

export default Message;
