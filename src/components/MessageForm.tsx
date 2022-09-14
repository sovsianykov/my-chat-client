import * as React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, FormGroup, styled } from "@mui/material";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const FormWrapper = styled(Box)({
  width: 300,
  height: 120,
  padding: 10,
  border: "2px solid #025498",
  borderRadius: 5,
  margin: "0 auto",
});

const MessageForm = () => {
  const [message, setMessage] = useState("");

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setMessage(e.target.value);
    },
    []
  );

  const onSubmitHandler = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (message === '') {
        toast("please write the message!");
        return
      }
      const newMessage = { message: message, id: new Date() };
      setMessage("");
      await axios.post(
        "https://my-chat-messenger.herokuapp.com/new-messages",
        newMessage
      );
    },
    [message]
  );

  return (
    <FormWrapper>
      <FormGroup
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="input your message..."
          value={message}
          onChange={onChangeHandler}
        />
        <Button
          type="submit"
          variant='outlined'
          sx={{ alignSelf: "flex-end", marginRight:3 }}
          onClick={onSubmitHandler}
        >
          Submit
        </Button>
          <ToastContainer/>
      </FormGroup>
    </FormWrapper>
  );
};
export default MessageForm;
