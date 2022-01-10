import React from 'react';
import {HashRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px red solid;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  border: green 1px solid;
  flex-grow: 1;
  overflow: auto`;
const Nav = styled.div`
  border: blue 1px solid;

  > ul {
    display: flex;

    > li {
      width: 33%;
      text-align: center;
      padding: 16px;
    }
  }
`;

function App() {
    return (
        <Router>
            <Wrapper><Main>
                <Switch>
                    <Redirect exact from="/" to="/money"/>
                    <Route path="/money">
                        <Money/>
                    </Route>
                    <Route path="/tags">
                        <Tags/>
                    </Route>
                    <Route path="/statistics">
                        <Statistics/>
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>

                </Switch></Main>
                <Nav>
                    <ul>
                        <li>
                            <Link to="/money">money-标签</Link>
                        </li>
                        <li>
                            <Link to="/tags">tags-标签</Link>
                        </li>
                        <li>
                            <Link to="/statistics">statistics-标签</Link>
                        </li>
                    </ul>
                </Nav>


            </Wrapper>
        </Router>
    );
}

function Money() {
    return <h2>Money-页面</h2>;
}

function Statistics() {
    return <h2>Statistics-页面</h2>;
}

function Tags() {
    return <h2>Tags-页面</h2>;
}

function NoMatch() {
    return <h2>404</h2>;
}

export default App;