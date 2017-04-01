import React from "react";
import keydown from "react-keydown";

import Arrow from "../arrow/Arrow";
import Canvas from "../canvas/Canvas";

import {connect} from "react-redux";

import {fetchImages} from "../../actions/imagesActions";

import styles from "./Gallery.scss";

@connect((store) => {
    return {
        images: store.gallery.images,
        activeIndex: store.gallery.activeIndex
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

    @keydown('left') 
    handleLeftClick() {
        if (this.state.activeIndex > 0) {
            let state = this.state;
            state.activeIndex--;
            state = this.handleArrows(state);
            this.setState(state)
        }
    }

    @keydown('right')
    handleRightClick() {
        if (this.state.activeIndex < this.state.images.length - 1) {
            let state = this.state;
            state.activeIndex++;
            state = this.handleArrows(state);
            this.setState(state);
        }
    }

    render() {
        return (
            <div class="pg-gallery">
                <Arrow direction="left" disabled={this.props.images.leftArrowDisabled} onClick={this.handleLeftClick} onKeyPress={this.handleKeyPress}/>
                <Arrow direction="right" disabled={this.props.images.rightArrowDisabled} onClick={this.handleRightClick} onKeyPress={this.handleKeyPress}/>
                <Canvas images={this.props.images} activeIndex={this.props.activeIndex}/>
            </div>
        );
    }
}