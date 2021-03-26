import React from "react";

import styled from "styled-components";

import Workspace from "../components/workspace";

const ExerciseDiv = styled.div`
  z-index: 1;
`;

function Exercise() {
  return (
    <ExerciseDiv>
      <h1>練習</h1>
      <Workspace
        loadCircuitIdx={1}
        saveFileName="t00b000x_exercise.cjb"
      ></Workspace>
    </ExerciseDiv>
  );
}

export default Exercise;
