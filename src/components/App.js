import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { handleIntialData } from "../actions/shared";
import LoadingBar from 'react-redux-loading'
import Dashboard from "./Dashboard";
import NewTweet from './NewTweet'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleIntialData());
    }
    render() {
        return (
            <div className="container">
                <LoadingBar />
                {this.props.loading === true ? null : <NewTweet />}
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
