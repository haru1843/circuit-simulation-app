import React from "react";

import styled from "styled-components";

const ImgPopupDiv = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;

  margin: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(180, 180, 180, 0.7);

  div {
    width: 70vw;
    height: 70vh;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 8px;

    img {
      &.close-img {
        position: relative;
        transform: translate(-35%, -35%);
        min-width: 30px;
        width: 2.2vw;

        cursor: pointer;
        transition: transform 200ms;

        &:hover {
          transform: translate(-35%, -35%) scale(0.85, 0.85);
        }
      }
      &.main-img {
        object-fit: contain;
        width: 90%;
        height: 90%;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: rgba(50, 50, 50, 1);
      }
    }
  }
`;

function ImgPopup(props) {
  return (
    <ImgPopupDiv show={props.show}>
      <div>
        <img
          className="close-img"
          src={`${process.env.PUBLIC_URL}/img-popup/close.svg`}
          alt="閉じるボタン"
          onClick={props.close}
        ></img>
        <img className="main-img" src={props.imgSrc} alt={props.imgAlt}></img>
      </div>
    </ImgPopupDiv>
  );
}

export default ImgPopup;
