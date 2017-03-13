import React from "react";

export default class Image extends React.Component {
    render() {
        let className = "pg-img-wrapper";
        if(this.props.activeIndex == this.props.position) {
            className = "pg-img-wrapper pg-img-main";
        } else {
            className = "pg-img-wrapper";
        }
        const styles = { left: this.props.position * 100 + '%' };
        return (
            <div class={className} style={styles} data-active={this.props.activeIndex}>
                <img src={this.props.src}/>
            </div>
        );
    }
}