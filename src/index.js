import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Loading from './pages/Loading';

import './style.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* Basic Routes */}
                    <Route exact path="/" component={Loading}/>
                    {/* Other Routes */}
                    <Route exact path="/test" component={Loading}/>
                    {/* NotMatch Routes */}
                    <Route component={Loading}/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
