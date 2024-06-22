import { isEqual } from 'lodash-es';
import React from 'react';
import { areNodesEqual } from 'react-cosmos-core';
import { FixtureContext, } from 'react-cosmos-renderer/client';
export class ErrorCatch extends React.Component {
    static contextType = FixtureContext;
    static prevContext = null;
    state = {
        error: null,
    };
    componentDidCatch(error, info) {
        this.setState({
            error: `${error.message}\n${info.componentStack}`,
        });
    }
    componentDidMount() {
        this.prevContext = this.context;
    }
    componentDidUpdate(prevProps) {
        // A change in fixture (children) or fixture state signifies that the
        // problem that caused the current error might've been solved. If the error
        // persists, it will organically trigger the error state again in the next
        // update
        if (this.state.error &&
            (fixtureChanged(this.props.children, prevProps.children) ||
                fixtureStateChanged(this.context.fixtureState, this.prevContext?.fixtureState))) {
            this.setState({ error: null });
        }
        this.prevContext = this.context;
    }
    render() {
        return this.state.error
            ? this.renderError(this.state.error)
            : this.props.children;
    }
    renderError(error) {
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null, "Ouch, something wrong!"),
            React.createElement("pre", null, error),
            React.createElement("p", null, "Check console for more info.")));
    }
}
function fixtureChanged(f1, f2) {
    return !areNodesEqual(f1, f2, true);
}
function fixtureStateChanged(fS1, fS2) {
    return !isEqual(fS1, fS2);
}
