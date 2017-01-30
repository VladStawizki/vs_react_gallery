import React from "react";
import ReactDOM from "react-dom";

class Gallery extends React.Component {
    render() {
        return (
            <h2>React Gallery!</h2>
        );
    }
}

const gallery = document.getElementById('gallery');
ReactDOM.render(<Gallery/>, gallery);