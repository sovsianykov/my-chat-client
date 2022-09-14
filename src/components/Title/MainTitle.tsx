import React from 'react';
import {MailOutline} from "@mui/icons-material";
import {Paper, styled} from "@mui/material";

const Title = styled(Paper)`
  background: #075a9f;
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: center;
  font-size: 24px;
  letter-spacing: 0.07rem;
  color: antiquewhite;
  font-weight: 600;
  margin-bottom: 20px;
`;



const MainTitle = () => {
    return (
        <Title>
            <MailOutline style={{ color: "#fff", marginRight: 20 }} />
            My Messenger
        </Title>
    );
};

export default MainTitle;
