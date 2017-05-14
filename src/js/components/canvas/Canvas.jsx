import React from "react";
import ReactDOM from "react-dom";

import Image from "../image/Image.jsx";
import styles from "./Canvas.scss";

export default class Canvas extends React.Component {
    componentDidMount() {
        //workaround: react don't support native transitionend event
        ReactDOM.findDOMNode(this)
            .addEventListener("transitionend", this.props.afterAnimation, false);
    }

    componentWillUnMount() {
        //workaround: react don't support native transitionend event
        ReactDOM.findDOMNode(this)
            .removeEventListener("transitionend", this.props.afterAnimation, false);
    }

    render() {
        let images = [];
        if (this.props.images.images) {
            //images.images: json structure
            images = this.props.images.images.map(
                (source, i) => <Image key={i}
                    src={source.thumbnail}
                    description={source.description}
                    link={source.link}
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