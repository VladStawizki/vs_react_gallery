import React from "react";

export default class Ceanvas extends React.Component {
    render() {
        const styles = { transform: `translate(-${5 * 100}%, 0%` };
        return (
            <div class="pg-canvas" style={styles}>
                {this.props.images}
            </div>
        );
    }
}