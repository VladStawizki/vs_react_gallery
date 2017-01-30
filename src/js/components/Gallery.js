import React from "react";

import Arrow from "./Arrow";
import Image from "./Image";

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
            "images": [
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
            ]
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
                <div class="pg-canvas">
                    {this.state.thumbnails}
                </div>
            </div>
        );
    }
}