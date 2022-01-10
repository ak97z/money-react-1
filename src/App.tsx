import React from 'react';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <nav>
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
                </nav>
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
                        <NoMatch />
                    </Route>

                </Switch>
            </div>
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