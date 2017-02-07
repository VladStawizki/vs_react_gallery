import React from "react";

export default class Image extends React.Component {
    constructor(){
        super();
        
        this.state = {
            "className": "pg-img-wrapper"
        }
    }

    render() {
        const styles = { left: this.props.position * 100 + '%' };
        return (
            <div class={this.state.className} style={styles}>
                <img src={this.props.thumb}/>
            </div>
        );
    }
}