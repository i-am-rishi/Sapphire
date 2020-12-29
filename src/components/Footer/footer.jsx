import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export function Footer(){
return(
    <div className="footer">
        <Link className="footer-link" to={{pathname:"https://www.facebook.com/rishabh.srivastava.1088/"}} target="_blank">Designed by - Rishabh Kumar Srivastava</Link>
    </div>
)
}