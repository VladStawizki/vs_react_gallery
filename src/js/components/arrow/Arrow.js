import React from "react";

import styles from "./Arrow.scss";

export default class Arrow extends React.Component {
    render() {
        const src = "images/" + this.props.direction + "-arrow.svg";
        let className = "pg-arrow pg-" + this.props.direction + "-arrow";
        if (this.props.disabled) {
            className = className + " pg-disabled";
        }
        return (
            <div class={className}>
                <img src={src} onClick={this.props.onClick} alt="" width="50" height="50"/>
            </div>
        );
    }
}