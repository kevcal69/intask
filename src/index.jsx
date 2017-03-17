import React from "react";
import ReactDOM from "react-dom";

import restmodel from "modules";

class Layout extends React.Component {
    render() {
        return (
            <h1>
                Hello
            </h1>
        );
    }
}

const app = document.getElementById('app')
ReactDOM.render(<Layout />, app)
