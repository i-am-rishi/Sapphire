import React from 'react';
import JoinUs from './components/JoinUs/joinus';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { Home } from './components/Home/home';
import { Footer } from './components/Footer/footer';
import { Contact } from './components/ContactInfo/contact';
import { Events } from './components/Events/events';
import { About } from './components/About/about';

function Show(){
    return ( 
        <BrowserRouter>
        <NavBar/>
        <Switch>
        <Route  path="/" exact  render={()=><Home/>}/>
        <Route  path="/contact-us"  render={()=><Contact/>}/>
        <Route  path="/join-us"  render={()=><JoinUs/>}/>
        <Route  path="/events"  render={()=><Events/>}/>
        <Route  path="/about"  render={()=><About/>}/>
        </Switch>
        <Footer/>
        </BrowserRouter>
    );
}

export default Show;