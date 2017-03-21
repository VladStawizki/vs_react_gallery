import React from "react";
import keydown from "react-keydown";


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

    @keydown( 'left' ) 
    handleLeftClick() {
        if (this.state.activeIndex > 0) {
            let state = this.state;
            state.activeIndex--;
            state = this.handleArrows(state);
            this.setState(state)
        }
    }

    @keydown ( 'right' )
    handleRightClick() {
        if (this.state.activeIndex < this.state.images.length - 1) {
            let state = this.state;
            state.activeIndex++;
            state = this.handleArrows(state);
            this.setState(state);
        }
    }

    handleKeyPress(e){
        console.log(e);
    }

    render() {
        return (
            <div class="pg-gallery">
                <Arrow direction="left" disabled={this.state.leftArrowDisabled} onClick={this.handleLeftClick} onKeyPress={this.handleKeyPress}/>
                <Arrow direction="right" disabled={this.state.rightArrowDisabled} onClick={this.handleRightClick} onKeyPress={this.handleKeyPress}/>
                <Canvas images={this.state.images} activeIndex={this.state.activeIndex}/>
            </div>
        );
    }
}