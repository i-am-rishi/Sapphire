import React from 'react';
import { Link } from 'react-router-dom';
import "./learnmore.css";

export function LearnMore(){
    return(
        <div className="learn-more">
            <div className="learn-button"><Link to="/events" className="href-link">Learn More <i className="fas fa-angle-right"></i></Link></div>
        </div>
    )
}