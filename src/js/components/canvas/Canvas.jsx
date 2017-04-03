import React from "react";

import Image from "../image/Image.jsx";
import styles from "./Canvas.scss";

export default class Canvas extends React.Component {
    render() {
        let images = [];
        if (this.props.images.images) {
            //images.images: json structure
            images = this.props.images.images.map(
                (source, i) => <Image key={i}
                    src={source.main}
                    position={i}
                    activeIndex={this.props.activeIndex}
                />
            );
        }
        const styles = { transform: `translate(-${this.props.activeIndex * 100}%, 0%` };
        return (
            <div class="pg-canvas" style={styles}>
                {images}
            </div>
        );
    }
}