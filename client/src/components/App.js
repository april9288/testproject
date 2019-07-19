import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TicketeProvider } from './Context';

import NavBar from './NavBar/index';
import Main from './Main/index';
import Detail from './Detail/index';

const App = () =>(
    <TicketeProvider>
        <Router>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/ticket/:id' component={Detail} />
            </Switch>
        </Router>
    </TicketeProvider>
)



export default App;