import React from "react";
import { Link } from "react-router-dom";
import MediaQuery, { useMediaQuery } from "react-responsive";

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

const HeaderDiv = styled.div`
  z-index: 99999;

  a {
    color: rgb(200, 200, 200);
    text-decoration: none;
    font-family: "M PLUS 1p", "Helvetica Neue", Arial, sans-serif;
  }
`;

function Header(props) {
  return (
    <HeaderDiv>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <div>
              <Link className="header-link" to="/top">
                トップ
              </Link>
            </div>
            <div>
              <Link className="header-link" to="/usage">
                使い方
              </Link>
            </div>
            <div>
              <Link className="header-link" to="/exercise">
                練習問題
              </Link>
            </div>
            <div>
              <Link className="header-link" to="/work1">
                課題1
              </Link>
            </div>
            <div>
              <Link className="header-link" to="/work2">
                課題2
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </HeaderDiv>
  );
}

export default Header;
