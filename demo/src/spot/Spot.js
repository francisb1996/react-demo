import React, { Component } from 'react';
import './Spot.css';

export class Spot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value || 0,
            styles: props.styles || {top: 50, left: 50}
        };
    }

    render() {
        // console.log('Rendering spot:' + this.state.value);
        return(
            <div className="spot" style={this.state.styles}>
                {this.state.value}
            </div>
        );
    }

}
