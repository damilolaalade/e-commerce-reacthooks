import React from "react";
import styled from "styled-components";
import { CopyrightRounded } from "@mui/icons-material";

const Container = styled.div`
  height: 35px;
  background-color: #4e6539;
  color: white;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const CopyRight = () => {
  return (
    <Container>
      <CopyrightRounded /> Copyright 2021 Developed by Damilola Aladeokin.
    </Container>
  );
};

export default CopyRight;
