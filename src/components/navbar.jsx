import React, { Component } from 'react';
import maarefaLogo  from "../assets/ALMAAREFA_UNIVERSITY.png";
import userImage from "../assets/userAvatar.png";
import SideBar from "./sidebar";


class Navbar extends Component {
    state = { 
        sidebarClicked: false,
    }
   
    render() { 

        return ( 
             
        
            <div style={{backgroundColor:"#ffffff"}}>     
               
                <nav className="navbar nav p-2 navbar-light bg-light ">
                    <div className="ml-3">
                        <button className="btn btn-sm btn-dark mr-2"
                        onClick={()=>this.props.onTranslation('en')}>En</button> 
                        <button className="btn btn-sm btn-primary "
                        onClick={()=>this.props.onTranslation('ar')}>Ar</button>
                        <br></br>
                        <p>contactus@mcat.edu.sa</p>
                    </div>
                    <img className="marrefaimage" src={maarefaLogo} alt="almaarefa"/>
                    <button 
                    className="btn bg-light btn-sm"
                    onClick={this.userClicked}> 
                    <img className="userImage" src={userImage} alt="Avatar"/>
                    </button>
                    
                </nav>
        
           
            {this.sideBar()}
            
            
            </div>
        );
    }
    

 
    userClicked=()=>
    {
        let bool = !this.state.sidebarClicked;
        this.setState({sidebarClicked: bool});
    }
    sideBar()
    {
        return (this.state.sidebarClicked)? (<SideBar onToggle={this.userClicked} t={this.props.t}/>): null;

    }

   

}
 
export default Navbar;