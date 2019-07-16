import React, {Component} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {Route, Router, Switch} from 'react-router-dom'
import './style.css';

class AnimatedSwitch extends Component {
    render() {
        return (
            <Router
                render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            classNames={this.props.type || 'fade'}
                            timeout={this.props.duration || 300}
                        >
                            <Switch location={location}>{this.props}</Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}
            />
        );
    }
}

export default AnimatedSwitch;