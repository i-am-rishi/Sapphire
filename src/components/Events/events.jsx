import React from 'react';
import "./events.css";
import { coming_soon_events, completed_events } from './eventsdata';
import { Link } from 'react-router-dom';


export function Events(){
return(
    <div className="events">
        <div className="a-la-carte">A La Carte</div>
        <div className="all-events">
            <div className="events-category">
                <div className="events-intro">Coming Soon</div>
                {coming_soon_events.map(events=>(
                <div key={events.name} className="pack">
                    <div className="link">
                    <Link className="event-link" to={{pathname:events.link}} target="_blank"><img src={events.poster} alt="coming-events"/></Link>
                    </div>
                    <div className="parallel">
                        <div className="event-name">{events.name}</div>
                        <div className="event-date">{events.date}</div>
                        <div className="event-description">{events.description}</div>
                    </div>
                </div>
            ))}
            </div>

{/* Completed Events */}

            <div className="events-category">
                <div className="events-intro">Completed Events</div>
                {completed_events.map(events=>(
                <div key={events.name} className="pack">
                    <div className="link">
                    <Link className="event-link" to={{pathname:events.link}} target="_blank"><img src={events.poster} alt="completed-events"/></Link>
                    </div>
                    <div className="parallel">
                        <div className="event-name">{events.name}</div>
                        <div className="event-date">{events.date}</div>
                        <div className="event-description">{events.description}</div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
)
}