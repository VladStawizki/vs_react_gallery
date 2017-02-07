import React from "react";

export default class Canvas extends React.Component {
    render() {
        const styles = { transform: `translate(-${this.props.activeIndex * 100}%, 0%` };
        return (
            <div class="pg-canvas" style={styles}>
                {this.props.images}
            </div>
        );
    }
}