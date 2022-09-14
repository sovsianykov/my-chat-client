import React from 'react';
import {Box, Paper, styled} from "@mui/material";
import MyEventSource from "./components/MyEventSource/MyEventSource";
import {MailOutline} from "@mui/icons-material";
function App() {

const Title = styled(Paper)`
 background: blue;
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: center;
  font-size: 24px;
  letter-spacing: 0.07rem;
  color: antiquewhite;
  font-weight: 600;
  margin-bottom: 20px;
`

  return (
    <Box maxWidth='sm' >
        <Title>
            <MailOutline style={{ color: "#fff",marginRight: 20}}/>
            My Messenger
        </Title>
       <MyEventSource/>
    </Box>
  );
}

export default App;
