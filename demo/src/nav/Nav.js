import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

export class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pages: ['Map', 'Graph', 'Calculator', 'Profile'],
            showSideNav: false
        }
    }   

    render() {
        return(
            <div className="nav-container">
                <div className="nav">
                    <Link to="/"><button id="home-btn" className="nav-btn">BRAD FRANCIS | REACTJS DEMO</button></Link>
                    <div className="spacer" />
                    {this.state.pages.map(page => <Link to={"/" + page.toLowerCase()} style={{ textDecoration: 'none' }} key={page}><button className="nav-btn">{page}</button></Link>)}
                </div>
                <div className="nav-mobile">
                    <Link to="/"><button id="home-btn" className="nav-btn">BRAD FRANCIS | REACTJS DEMO<div className="spacer" /></button></Link>
                    <button id="menu-btn" className="nav-btn" onClick={() => this.setState({showSideNav: !this.state.showSideNav})}>| | |</button>
                </div>
                <div className={this.state.showSideNav ? 'sidenav show': 'sidenav hidden'}>
                    {this.state.pages.map(page => <Link to={"/" + page.toLowerCase()} style={{ textDecoration: 'none' }} key={page}><button className="nav-btn" onClick={() => this.setState({showSideNav: false})}>{page}</button></Link>)}
                </div>
            </div>
        );
    }
}