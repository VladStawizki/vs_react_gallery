import React from "react";

import Arrow from "./Arrow";
import Image from "./Image";
import Canvas from "./Canvas";

export default class Gallery extends React.Component {
    constructor() {
        super();

        this.state = {
            "thumbnails": [
                <Image thumb="images/dummy.jpg" />,
                <Image thumb="images/dummy.jpg" />,
                <Image thumb="images/dummy.jpg" />,
                <Image thumb="images/dummy.jpg" />,
                <Image thumb="images/dummy.jpg" />,
                <Image thumb="images/dummy.jpg" />,
                <Image thumb="images/dummy.jpg" />,
                <Image thumb="images/dummy.jpg" />,
                <Image thumb="images/dummy.jpg" />,
                <Image thumb="images/dummy.jpg" />,
                <Image thumb="images/dummy.jpg" />,
            ],
            "images": null,
            "activeIndex": 0,
            "canvas": null 
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
        ].map((source, i) => <Image key={i} thumb={source} position={i} activeIndex={this.state.activeIndex} />);

        this.state.images = Images;

        this.state.canvas = <Canvas images={this.state.images} activeIndex={this.state.activeIndex} />

        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);

    }

    handleLeftClick() {
        let state = this.state;
        
        if(this.state.activeIndex > 0){
            console.log('left');
            state.activeIndex--;
            state.canvas = <Canvas images={state.images} activeIndex={state.activeIndex} />
            this.setState(state);
        }

        console.log(this.state);
    }

    handleRightClick() {
        let state = this.state;
        if( this.state.activeIndex < this.state.images.length) {
            console.log('right');
            state.activeIndex++;
            state.canvas = <Canvas images={state.images} activeIndex={state.activeIndex} />
            this.setState(state);
        }

        console.log(this.state);
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
                {this.state.canvas}
            </div>
        );
    }
}