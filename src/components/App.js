import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { handleIntialData } from "../actions/shared";
import Dashboard from "./Dashboard";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleIntialData());
    }
    render() {
        return (
            <div className="container">
                {this.props.loading === true ? null : <Dashboard />}
            </div>
        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null,
    };
}

export default connect(mapStateToProps)(App);
