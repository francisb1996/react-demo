import React, {Component} from 'react';
import './Nav.css';

export class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pages: ['Spots', 'Calculator', 'Profile']
        }
    }

    render() {
        return(
            <div className="nav">
                <div className="title">BRAD FRANCIS | REACTJS DEMO</div>
                <div className="spacer" />
                {this.state.pages.map(page => <button key={page} className="nav-btn">{page}</button>)}
            </div>
        )
    }
}