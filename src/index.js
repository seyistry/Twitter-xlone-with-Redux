import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/";
import middleware from './middleware'

function ColorfulBorder() {
    return (
        <React.Fragment>
            <ul className="border-container">
                <li
                    className="border-item"
                    style={{ background: "var(--red)" }}
                />
                <li
                    className="border-item"
                    style={{ background: "var(--blue)" }}
                />
                <li
                    className="border-item"
                    style={{ background: "var(--pink)" }}
                />
                <li
                    className="border-item"
                    style={{ background: "var(--yellow)" }}
                />
                <li
                    className="border-item"
                    style={{ background: "var(--aqua)" }}
                />
            </ul>
        </React.Fragment>
    );
}

const store = createStore(reducer, middleware);

ReactDOM.render(
    <React.StrictMode>
        <ColorfulBorder />
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
