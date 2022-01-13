import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';
import {Tag} from './views/Tag/Tag';


function App() {
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/money"/>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route exact path="/tags">
                    <Tags/>
                </Route>
                <Route exact path="/tags/:tag">
                    <Tag/>
                </Route>
                <Route exact path="/statistics">
                    <Statistics/>
                </Route>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
    );
}


export default App;