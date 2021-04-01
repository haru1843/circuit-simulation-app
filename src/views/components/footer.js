import React from "react";
// import { Link } from "react-router-dom";

import styled from "styled-components";

const FooterrDiv = styled.div`
  z-index: 99999;
  position: relative;

  display: flex;
  align-items: center;

  background-color: rgb(32, 32, 32);
  color: rgb(200, 200, 200);
  font-size: 0.8rem;

  img.lab-logo {
    width: 10%;
    margin: 1rem;
  }

  span {
    display: inline-block;

    /* position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%); */

    &.righting {
    }
    &.link-container {
      margin-left: auto;
      margin-right: 2rem;

      a {
        margin-left: 1em;
        text-decoration: none;
        color: rgb(200, 200, 200);

        &:hover {
          color: rgb(230, 230, 230);
        }
      }
    }
  }
`;

function Footer(props) {
  return (
    <FooterrDiv>
      <img
        className="lab-logo"
        src={`${process.env.PUBLIC_URL}/footer/lab_logo.svg`}
        alt="デバイスの画像"
      ></img>
      <span className="righting">
        {"(C) 2020- nishimori lab. All Rights Reserved."}
      </span>
      <span className="link-container">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://haru1843.github.io/simulate_circuit/"
        >
          旧ページ
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nu-nishimori-lab.netlify.app/"
        >
          研究室HP
        </a>
      </span>
    </FooterrDiv>
  );
}

export default Footer;
