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

  div.header-right {
    margin-left: auto;
    /* margin-right: -12; */

    .link-div {
      border-left: 2px solid #505050;
      width: 150px;
      text-align: center;
      display: inline-block;
      /* margin: 0; */

      a {
        color: rgb(200, 200, 200);
        display: block;
        width: 100%;
        height: 100%;

        text-decoration: none;
        font-family: "M PLUS 1p", "Helvetica Neue", Arial, sans-serif;
        transition: 0.3s ease-out;
        text-shadow: 0px 0px 0px rgba(170, 170, 170, 0.6);
      }

      /* "to left" / "to right" - affects initial color */
      background: linear-gradient(to left, #202020 50%, #505050 50%) right;
      background-size: 200%;
      transition: 0.2s ease-out;

      &:hover {
        background-position: left;
        a {
          text-shadow: 2px 2px 2px rgba(150, 150, 150, 0.5);
        }
      }
    }
  }
`;

function Header(props) {
  return (
    <HeaderDiv>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <span>回路シミュレータ</span>
            <div className="header-right">
              <div className="link-div">
                <Link to="/">トップ</Link>
              </div>
              <div className="link-div">
                <Link to="/usage">使い方</Link>
              </div>
              <div className="link-div">
                <Link to="/exercise">練習</Link>
              </div>
              <div className="link-div">
                <Link to="/work1">課題1</Link>
              </div>
              <div className="link-div">
                <Link to="/work2">課題2</Link>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </HeaderDiv>
  );
}

export default Header;
