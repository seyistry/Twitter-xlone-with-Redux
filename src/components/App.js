import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { handleIntialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleIntialData());
    }
    render() {
        return (
            <div className="container">
                <LoadingBar />
                {this.props.loading === true ? null : (
                    <TweetPage
                        match={{ params: { id: "2mb6re13q842wu8n106bhk" } }}
                    />
                )}
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
