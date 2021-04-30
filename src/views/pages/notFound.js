import React from "react";

import styled from "styled-components";

const NotFoundDiv = styled.div`
  z-index: 1;

  height: 82vh;

  background: rgb(250, 250, 250);
  background-image: repeating-linear-gradient(
    -45deg,
    #fff,
    #fff 4px,
    transparent 0,
    transparent 14px
  );

  > div {
    display: inline-block;
    vertical-align: top;

    &.img-container {
      height: 100%;
      width: 45%;
      position: relative;

      img {
        width: 70%;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &.text-container {
      width: 55%;
      color: rgb(80, 80, 80);
      position: absolute;
      top: 40%;
      transform: translateY(-50%);

      div.error-title {
        margin-right: 10%;

        font-size: 2.5rem;
        font-weight: 700;
        border-bottom: 1px solid rgb(40, 40, 40);
      }
      div.error-desc {
        margin-top: 1rem;

        margin-right: 10%;
        margin-left: 1rem;

        font-size: 1.1rem;
      }
    }
  }
`;

function NotFound() {
  return (
    <NotFoundDiv>
      <div className="img-container">
        <img
          src={`${process.env.PUBLIC_URL}/notFound/page-not-found.svg`}
          alt="404の画像"
        ></img>
      </div>
      <div className="text-container">
        <div className="error-title">存在しないページです</div>
        <div className="error-desc">
          アクセスしたページは「移動」や「削除」された可能性があります
        </div>
      </div>
    </NotFoundDiv>
  );
}

export default NotFound;
