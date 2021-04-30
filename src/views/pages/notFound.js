import React from "react";

import styled from "styled-components";

const NotFoundDiv = styled.div`
  z-index: 1;
`;

function NotFound() {
  return <NotFoundDiv>hey! page not found!</NotFoundDiv>;
}

export default NotFound;
