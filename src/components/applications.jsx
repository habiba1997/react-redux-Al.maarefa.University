import React, { Component } from 'react';
import {  Link } from 'react-router-dom'; 

class Applications extends Component {
    render() { 
        console.log("applications");
        return (  
        <div className="container text-center">
                        
                <h1 className="mt-5">
                    Applications
                </h1>
                <Link className="anchor_no_decoration" to="/">
                <button className="justify-content-end btn btn-lg btn-dark">
                    
                       Back 
                </button>           
                </Link>

            
        </div>  
    );
    }
}
 
export default Applications;