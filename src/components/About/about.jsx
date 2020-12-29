import React from 'react';
import { total_events, wedo, head_panel, lifeline } from './aboutdata';
import "./about.css";
import { Link } from 'react-router-dom';


export function About(){
return(
    <div className="about-section">
        <div className="subordinate-sections">
            <div className="section-intro">What We Do</div>
            <div className="elements">
            {wedo.map(items=>(
                <div key={items.title} className="elements-pack">
                <div className={items.icon+" icons"}></div>
                <div className="title">{items.title}</div>
                <div className="description">{items.description}</div>
                </div>
            ))}
        </div>
    </div>


    <div className="subordinate-sections">
            <div className="section-intro">Family</div>
            <div className="elements">
            {total_events.map(events=>(
                <div className="collect">
                    <div className="numbers">{events.number}+</div>
                    <div className="family-title">{events.title}</div>
                </div>

            ))}
            </div>
    </div>
    
    <div className="subordinate-sections">
            <div className="section-intro">Head Panel</div>
            <div className="panel-elements">
            {head_panel.map(items=>(
                <div key={items.photo} className="panel-pack">
                    <img src={items.photo} className="panel-img" alt={items.title}/>
                    <div className="panel-name">{items.name}</div>
                    <div className="panel-designation">{items.designation}</div>
                    <div className="social-icons">
                        <Link to={{pathname:""}} className="fab fa-facebook-f panel-link" target="_blank"></Link>
                        <Link to={{pathname:""}} className="fab fa-instagram panel-link" target="_blank"></Link>
                        <Link to={{pathname:""}} className="fab fa-linkedin-in panel-link" target="_blank"></Link>
                    </div>
                    <div className="panel-introduction">{items.introduction}</div>
                </div>
            ))}
            </div>
    </div> 

    <div className="subordinate-sections">
            <div className="section-intro">Organisation Lifeline</div>
            <div className="lifeline-elements">
         {lifeline.map(items=>(
             <div key={items.photo} className="lifeline-pack">
                 <img className="lifeline-img" src={items.photo} alt="photos"/>
             </div>
         ))}
            </div>
    </div> 
</div>
)
}