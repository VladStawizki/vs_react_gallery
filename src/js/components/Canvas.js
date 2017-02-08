import React from "react";

import Image from "./Image";

export default class Canvas extends React.Component {
    render() {
        const images = this.props.images.map((source, i) => <Image key={i} src={source} position={i} activeIndex={this.props.activeIndex} />);
        const styles = { transform: `translate(-${this.props.activeIndex * 100}%, 0%` };
        return (
            <div class="pg-canvas" style={styles}>
                {images}
            </div>
        );
    }
}