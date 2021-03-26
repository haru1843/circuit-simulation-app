import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import styled from "styled-components";

import Header from "./views/components/header";
import Top from "./views/pages/top";
import Usage from "./views/pages/usage";
import Exercise from "./views/pages/exercise";

const AppDiv = styled.div`
  div.body-container {
    margin-left: 2vw;
    margin-right: 2vw;
  }
`;

function App() {
  return (
    <AppDiv>
      <BrowserRouter>
        <Header></Header>
        <div className="body-container">
          <Switch>
            <Route exact path="/" component={Top}></Route>
            <Route exact path="/usage" component={Usage}></Route>
            <Route exact path="/exercise" component={Exercise}></Route>
            <Route exact path="/work1">
              work1
            </Route>
            <Route exact path="/work2">
              work2
            </Route>
            <Route>not found</Route>
          </Switch>
        </div>
      </BrowserRouter>
    </AppDiv>
  );
}

export default App;
