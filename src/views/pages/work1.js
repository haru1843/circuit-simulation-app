import React from "react";

import styled from "styled-components";

const Work1Div = styled.div`
  z-index: 1;
`;

function Work1() {
  return (
    <Work1Div>
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
    </Work1Div>
  );
}

export default Work1;
