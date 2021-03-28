import React from "react";
// import { Link } from "react-router-dom";

import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#303030",
      main: "#202020",
      dark: "#101010",
      contrastText: "#fff",
    },
  },
});

const FooterrDiv = styled.div`
  z-index: 99999;

  background-color: rgb(32, 32, 32);

  img.lab-logo {
    width: 20%;
  }
`;

function Footer(props) {
  return (
    <FooterrDiv>
      <div>
        <img
          className="lab-logo"
          src={`${process.env.PUBLIC_URL}/footer/lab_logo.svg`}
          alt="デバイスの画像"
        ></img>
        <span>
          <span>hoge</span>
          <span>fuga</span>
          <span>piyo</span>
        </span>
      </div>
      <div>{"(C) 2020- nishimori lab. All Rights Reserved."}</div>
    </FooterrDiv>
  );
}

export default Footer;
