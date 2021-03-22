import React from "react";

import styled from "styled-components";

const WorkspaceDiv = styled.div`
  margin: 0 3vw;
  div.simcir-container {
    overflow: scroll;
  }
`;

function Workspace(props) {
  const simcirInitJson = '{"height":800, "width":2000}';
  return (
    <WorkspaceDiv>
      <div className="simcir-container">
        <div className="simcir">{simcirInitJson}</div>
      </div>
    </WorkspaceDiv>
  );
}

export default Workspace;
