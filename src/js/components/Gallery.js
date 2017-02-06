import React from "react";

import Arrow from "./Arrow";
import Image from "./Image";
import Canvas from "./Canvas";

export default class Gallery extends React.Component {
    constructor() {
        super();

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
        ].map((source, i) => <Image key={i} thumb={source} position={i} activeIndex={0} />);

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
            "images": Images,
            "activeIndex": 0,
            "canvas": <Canvas images={Images} activeIndex={0} />
        }
    }

    render() {
        return (
            <div class="pg-gallery">
                <div class="pg-arrow pg-left-arrow">
                    <Arrow direction="left" />
                </div>
                <div class="pg-arrow pg-right-arrow">
                    <Arrow direction="right" />
                </div>
                {this.state.canvas}
            </div>
        );
    }
}