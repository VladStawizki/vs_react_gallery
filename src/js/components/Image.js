import React from "react";

export default class Image extends React.Component {
    render() {
        console.log(this.props);
        const className = this.props.activeIndex == this.props.position ? 'pg-img-wrapper pg-img-main' : 'pg-img-wrapper'   
        const styles = { left: this.props.position * 100 + '%' };
        return (
            <div class={className} style={styles}>
                <img src={this.props.thumb}/>
            </div>
        );
    }
}