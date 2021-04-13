import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { handleIntialData } from "../actions/shared";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleIntialData())
    }
    render() {
        return <div className="container">Twiiter Clone</div>;
    }
}
export default connect()(App);
