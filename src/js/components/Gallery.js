import React from "react";

import Arrow from "./Arrow";
import Image from "./Image";
import Canvas from "./Canvas";

export default class Gallery extends React.Component {
    constructor() {
        super();

        this.state = {
            "images": null,
            "activeIndex": 0
        }

        const Images = [
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
        ].map((source, i) => <Image key={i} thumb={source} position={i} />);

        this.state.images = Images;

        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);

    }

    handleLeftClick() {
        if( this.state.activeIndex > 0 ){
            let state = this.state;
            state.activeIndex--;
            this.setState(state)
        }
    }

    handleRightClick() {
        if( this.state.activeIndex < this.state.images.length ) {
            let state = this.state;
            state.activeIndex++;
            this.setState(state);
        }
    }

    render() {
        return (
            <div class="pg-gallery">
                <div class="pg-arrow pg-left-arrow">
                    <Arrow direction="left" onClick={this.handleLeftClick}/>
                </div>
                <div class="pg-arrow pg-right-arrow">
                    <Arrow direction="right" onClick={this.handleRightClick}/>
                </div>
                <Canvas images={this.state.images} activeIndex={this.state.activeIndex}/>
            </div>
        );
    }
}