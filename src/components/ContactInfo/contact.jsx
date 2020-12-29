import React, { Component } from 'react';
import "./contact.css";
import { contact,socialMedia } from './contactdata';
import { Link, Redirect } from 'react-router-dom';


export class Contact extends Component {
    state = {  }

    handleSubmit=e=>{
        <Redirect to={e}/>
        console.log(e);
    }

    render() { 
        return ( 
            <div className="contact-info">
             <div className="inner-contents">
                 <div className="message-box">
                     <form>
                         <legend>Write To Us <i className="fas fa-pen-nib"></i></legend>
                         <label htmlFor="name" className="label-name">Name:</label>
                         <input type="text" name="name" id="name" placeholder="John Doe"/><br/>
                         <label htmlFor="email" className="label-email">Email:</label>
                         <input type="email" name="email" id="email" placeholder="someone@something.com"/><br/>
                         <label htmlFor="message" className="label-message">Message:</label>
                         <input type="text" name="message" id="message" placeholder="Want To Join Sapphire"/><br/>
                         <div   type="submit" className="submit-button" >Submit</div>
                     </form>
                 </div>
                 <div className="other-info">
                     {contact.map(index=>(<div key={index.title}><i className={index.icon+" contact-icons"}></i><div className="contents">{index.content}</div></div>))}
                 </div>
             </div>
             <div className="social-media-label">Connect With Us <i className="fas fa-people-arrows"></i></div>
             <div className="social-media-icons">
             {socialMedia.map(items=>(<Link key={items.title} className="cursor-on-icons" to={{ pathname: items.link }} target="_blank" ><i className={items.icon}></i></Link>))}
             </div>
         </div>
       );
    }
}



    
    // export function Contact(){
        
    //     return(
    //         <div className="contact-info">
    //             <div className="inner-contents">
    //                 <div className="message-box">
    //                     <form>
    //                         <legend>Write To Us <i className="fas fa-pen-nib"></i></legend>
    //                         <label htmlFor="name" className="label-name">Name:</label>
    //                         <input type="text" name="name" id="name" placeholder="John Doe"/><br/>
    //                         <label htmlFor="email" className="label-email">Email:</label>
    //                         <input type="email" name="email" id="email" placeholder="someone@something.com"/><br/>
    //                         <label htmlFor="message" className="label-message">Message:</label>
    //                         <input type="text" name="message" id="message" placeholder="Want To Join Sapphire"/><br/>
    //                         <div   type="submit" className="submit-button" >Submit</div>
    //                     </form>
    //                 </div>
    //                 <div className="other-info">
    //                     {contact.map(index=>(<div key={index.title}><i className={index.icon+" contact-icons"}></i><div className="contents">{index.content}</div></div>))}
    //                 </div>
    //             </div>
    //             <div className="social-media-label">Connect With Us <i className="fas fa-people-arrows"></i></div>
    //             <div className="social-media-icons">
    //             {socialMedia.map(items=>(<Link key={items.title} onClick={()=>this.handleSubmit(items.link)} to={items.link}><i className={items.icon}></i></Link>))}
    //             </div>
    //         </div>
    //     )
    // }
 