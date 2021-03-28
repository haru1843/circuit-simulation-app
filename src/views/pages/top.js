import React from "react";

import styled from "styled-components";

const TopDiv = styled.div`
  z-index: 1;

  section {
    min-height: 80vh;
    &:nth-of-type(2n) {
      background-color: rgb(60, 60, 60) !important;
    }
    &:nth-of-type(2n + 1) {
      background-color: rgb(200, 200, 200) !important;
    }
  }

  div.next {
    width: 100%;
    height: 80vh;

    text-align: center;

    & > div {
      font-size: 3rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
    }
  }
`;

function Top() {
  return (
    <TopDiv>
      <div className="next">
        <div>
          <div>↓</div>
        </div>
      </div>
      <section className="intro">x → y → z → d</section>
      <section className="desc"></section>
      <section className="link"></section>
      <h1>進め方</h1>
      <h1>各種リンク</h1>
      <div>
        <p>講義資料</p>
      </div>
      <div>
        <p>FAQ</p>
      </div>
      <div>
        <p>西森研</p>
      </div>
    </TopDiv>
  );
}

export default Top;
