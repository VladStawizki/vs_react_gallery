import React from "react";

import Arrow from "../arrow/Arrow";
import Canvas from "../canvas/Canvas";

import styles from "./Gallery.scss";

export default class Gallery extends React.Component {
    constructor() {
        super();

        this.state = {
            "images": null,
            "activeIndex": 0,
            "leftArrowDisabled": true,
            "rightArrowDisabled": false
        }

        this.state.images = [
            "http://lorempixel.com/1920/1080",
            "http://lorempixel.com/1920/1080",
            "http://lorempixel.com/1080/1920",
            "http://lorempixel.com/1920/1080",
            "http://lorempixel.com/1920/1080",
            "http://lorempixel.com/1920/1080",
            "http://lorempixel.com/1080/1920",
            "http://lorempixel.com/1080/1920",
            "http://lorempixel.com/1920/1080",
            "http://lorempixel.com/1920/1080"
        ];

        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);

    }

    handleArrows(state) {
        if (state.activeIndex == 0) {
            state.leftArrowDisabled = true;
            state.rightArrowDisabled = false;
        } else {
            state.leftArrowDisabled = false;
            state.rightArrowDisabled = false;
        }
        if (state.activeIndex == state.images.length - 1) {
            state.leftArrowDisabled = false;
            state.rightArrowDisabled = true;
        } else {
            state.leftArrowDisabled = false;
            state.rightArrowDisabled = false;
        }
    }

    handleLeftClick() {
        if (this.state.activeIndex > 0) {
            let state = this.state;
            state.activeIndex--;
            console.log('left click', state);
            state = this.handleArrows(state);
            this.setState(state)
        }
    }

    handleRightClick() {
        if (this.state.activeIndex < this.state.images.length - 1) {
            let state = this.state;
            state.activeIndex++;
            console.log('right click', state);
            state = this.handleArrows(state);
            this.setState(state);
        }
    }

    render() {
        return (
            <div class="pg-gallery">
                <Arrow direction="left" disabled={this.state.leftArrowDisabled} onClick={this.handleLeftClick}/>
                <Arrow direction="right" disabled={this.state.rightArrowDisabled} onClick={this.handleRightClick}/>
                <Canvas images={this.state.images} activeIndex={this.state.activeIndex}/>
            </div>
        );
    }
}