import React, { Component } from 'react';
import {Spot} from '../spot/Spot';
import './Map.css';

// TODO add small window when hovering over spot
export class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            name: props.name || null,
            children: [],
        };
    }

    render() {
        return(
            <div className="map" onClick={(e) => this.addSpot(e)}>
                {this.state.children.map(spot => <Spot key={spot.value} value={spot.value} styles={spot.styles} />)}      
            </div>
        );
    }

    addSpot(e) {
        // console.log(e.pageX);
        let map = document.getElementsByClassName('map')[0];
        let spot = {
            value: this.state.value,
            styles: {
                left: e.pageX - 15 - map.getBoundingClientRect().left,
                top: e.pageY - 15 - map.getBoundingClientRect().top
            }
        }
        this.state.children.push(spot);
        this.setState({value: this.state.value + 1});
    }

}
