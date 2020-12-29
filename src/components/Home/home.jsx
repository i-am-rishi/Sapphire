import React from 'react';
import "./home.css";
import { LearnMore } from '../Buttons/learnmore';
import { introduction } from './homedata';

export function Home(){
        return(
            <div className="home-component">
                <div className="opening-statements">
                {introduction}
                </div>
                <div className="button">
                <LearnMore/>
                </div>
            </div>
        )
}