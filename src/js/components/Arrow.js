import React from "react";

export default class Arrow extends React.Component {
    render() {
        const src = "images/" + this.props.direction + "-arrow.svg";
        return (
            <img src={src} alt="" width="50" height="50"/>
        );
    }
}