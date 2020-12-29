import React, { Component } from 'react';
import { MenuItems } from './Menuitems';
import { Link } from 'react-router-dom';
import "./NavBar.css";


class NavBar extends Component {
    state = { 
menuitems:MenuItems,
clicked:false
     }

     handleClick=()=>{
         this.setState({clicked:!this.state.clicked});
     }
    render() {
        return (
            <div className="NavBar">
            <nav className="NavBarItems">
                <h1 className="navbar-logo"><Link to="/" className="nav-links-logo">Sapphire</Link><i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}><i className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'}></i></div>
                <ul className={this.state.clicked?'nav-menu active' : 'nav-menu'}>
                    {this.state.menuitems.map(items=> <li key={items.title} ><Link to={items.url} className={items.cname}>{items.title}</Link></li>)}
                </ul>
            </nav>
            <div className="division-logo">
            {/* {SliderData.map(img=>(<img src={img.image} alt="image" className="absolute-logo" />))} */}
            </div>
            </div>
        );
    }
}

export default NavBar;