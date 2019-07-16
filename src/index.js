import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AnimatedSwitch from './layouts/AnimatedSwitch';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import IndexPage from './pages/Index';
import LoadingPage from './pages/Loading';
import NotFoundPage from './pages/NotFound';

import './style.css';
import 'antd/dist/antd.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* Basic Routes */}
                    <Route exact path="/" component={IndexPage}/>
                    {/* Other Routes */}
                    <Route exact path="/loading" component={LoadingPage}/>
                    {/* NotMatch Routes */}
                    <Route component={NotFoundPage}/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
