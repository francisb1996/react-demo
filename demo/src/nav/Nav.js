import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

export class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pages: ['Map', 'Calculator', 'Profile']
        }
    }

    render() {
        return(
            <div className="nav">
                <div className="title">BRAD FRANCIS | REACTJS DEMO</div>
                <div className="spacer" />
                {this.state.pages.map(page => <Link to={"/" + page.toLowerCase()} style={{ textDecoration: 'none' }}><button key={page} className="nav-btn">{page}</button></Link>)}
            </div>
        )
    }
}