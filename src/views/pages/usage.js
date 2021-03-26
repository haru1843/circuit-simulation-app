import React from "react";

import styled from "styled-components";

import Workspace from "../components/workspace";

const UsageDiv = styled.div`
  z-index: 1;
`;

function Usage() {
  return (
    <UsageDiv>
      <h1>使い方</h1>
      <Workspace
        loadCircuitIdx={0}
        saveFileName="t00b000x_usage.cjb"
      ></Workspace>
    </UsageDiv>
  );
}

export default Usage;
