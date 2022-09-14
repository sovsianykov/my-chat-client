import React, {
  FormEvent,
  FunctionComponent,
  useCallback,
  useContext,
  useState,
} from "react";
import { Box, Button, FormGroup, styled, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { NameContext } from "../../Context";
import { toast, ToastContainer } from "react-toastify";

interface LoginProps {
  onLogin: (isLogged: boolean) => void;
}

const Wrapper = styled(Box)`
  width: 100%;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #025498;
  background: #f0f0f8;
`;
const Input = styled(TextField)`
  color: #fff;
`;

const Login: FunctionComponent<LoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { setName } = useContext(NameContext);
  const onSubmitHandler = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (password === process.env.REACT_APP_SECRET && !!username) {
        onLogin(true);
        setName(username);
      } else {
        toast("Wrong password!");
        onLogin(false);
      }
    },
    [onLogin, password, setName, username]
  );

  return (
    <Wrapper>
      <ToastContainer />
      <Typography>Login</Typography>
      <FormGroup
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Input
          required
          type="text"
          label="choose your name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          required
          type="password"
          label="input your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ alignSelf: "flex-end", marginRight: 1 }}
          onClick={onSubmitHandler}
        >
          Enter
        </Button>
      </FormGroup>
    </Wrapper>
  );
};

export default Login;
