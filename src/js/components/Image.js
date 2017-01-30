import React from "react";

export default class Image extends React.Component {
    render() {
        return (
            <img class="pg-thumbnail" src={this.props.thumb}/>
        );
    }
}