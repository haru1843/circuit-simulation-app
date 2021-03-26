import React from "react";

import styled from "styled-components";

const TopDiv = styled.div`
  z-index: 1;
`;

function Top() {
  return (
    <TopDiv>
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
