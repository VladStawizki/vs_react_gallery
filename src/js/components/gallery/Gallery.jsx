import React from "react";
import keydown from "react-keydown";
import { connect } from "react-redux";

import Arrow from "../arrow/Arrow.jsx";
import Canvas from "../canvas/Canvas.jsx";

import { fetchImages, slideRight, slideLeft } from "../../actions/imagesActions";

import styles from "./Gallery.scss";

@connect((store) => {
    return {
        images: store.gallery.images,
        activeIndex: store.gallery.activeIndex,
        leftArrowDisabled: store.gallery.leftArrowDisabled,
        rightArrowDisabled: store.gallery.rightArrowDisabled
    }
})
export default class Gallery extends React.Component {
    constructor() {
        super();

        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
    }

    componentWillMount() {
        console.info('componentWillMount');
        this.props.dispatch(fetchImages());
    }

    @keydown('left')
    handleLeftClick() {
        if (this.props.activeIndex - 1 > 0) {
            this.props.dispatch(slideLeft());
        }
    }

    @keydown('right')
    handleRightClick() {
        if (this.props.activeIndex + 1 < this.props.images.images.length) {
            this.props.dispatch(slideRight());
        }
    }

    render() {
        return (
            <div class="pg-gallery">
                <Arrow direction="left"
                    disabled={this.props.leftArrowDisabled}
                    onClick={this.handleLeftClick}
                    onKeyPress={this.handleKeyPress}
                />
                <Arrow direction="right" 
                    disabled={this.props.rightArrowDisabled} 
                    onClick={this.handleRightClick} 
                    onKeyPress={this.handleKeyPress} 
                />
                <Canvas images={this.props.images} activeIndex={this.props.activeIndex} />
            </div>
        );
    }
}