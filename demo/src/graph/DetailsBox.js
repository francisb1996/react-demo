import React, {Component} from 'react';
import './DetailsBox.css';

export class DetailsBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0
        }
        this.refreshEverySecond();
    }

    render() {
        if (this.props.activeNode) {
            return(
                <div className="details-box">
                    <h3>DETAILS</h3>
                    <dt>NAME</dt>
                    <dd>{this.props.activeNode.id}</dd>
                    <dt>TYPE</dt>
                    <dd>{this.props.activeNode.type}</dd>                       
                    <dt>MESSAGES</dt>
                    <div className="message-container">
                        {this.props.activeNode.messages.map((message, index) => {
                            return (<dd key={index}>{message}</dd>);
                        })}
                    </div>
                </div>
            )
        } 
        else {
            return(
                <div className="details-box">
                    <h3>DETAILS</h3>
                    Please select a node.
                </div>
            )
        }
    }

    refreshEverySecond() {
        setInterval(() => {
            this.setState({timer: this.timer + 1});
        }, 1000)
    }
}