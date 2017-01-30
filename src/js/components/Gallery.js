import React from "react";
import Arrow from "./Arrow";

export default class Gallery extends React.Component {
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

                </div>
            </div>
        );
    }
}