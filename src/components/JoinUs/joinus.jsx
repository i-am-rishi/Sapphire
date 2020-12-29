import React, { Component } from 'react';
import { joinUsContents } from './joincontents';
import './joinus.css';
import { Link } from 'react-router-dom';

class JoinUs extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="join-us">
            <div className="join-us-title">{joinUsContents.title}</div>
            <div className="join-us-description">{joinUsContents.contents}</div>
            <Link className="join-us-link" to={{ pathname: "https://sapphirelpu.typeform.com/to/zRz5KqW4" }} target="_blank" >{joinUsContents.buttonLabel}</Link>
        </div> 
        );
    }
}

export default JoinUs;