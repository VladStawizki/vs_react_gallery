import React from "react";

import styles from "./Arrow.scss";

export default class Arrow extends React.Component {
    render() {
        const src = "images/" + this.props.direction + "-arrow.svg";
        let className = "pg-arrow pg-arrow--" + this.props.direction;
        if (this.props.disabled) {
            className = className + " pg-arrow--disabled";
        }
        return (
            <div class={className}>
                <img src={src} onClick={this.props.onClick} onKeyPress={this.props.onKeyPress} alt="" width="50" height="50"/>
            </div>
        );
    }
}