import React, {Component} from 'react';
import './Graph.css';

export class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: []
        };
    }

    render() {
        return (
            <div className="canvas">Graph works</div>
        ); 
    }
}