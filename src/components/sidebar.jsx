import React, { Component } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import userImage from "../assets/userAvatar.png";
import {  Link } from 'react-router-dom'; 

class SideBar extends Component {

    render() { 
        return (  
    <div  className="bg-light overflow">
            
        <div className="list-group-item bg-light list-group-flush">
            
            <button onClick={this.props.onToggle} className="ml-0 btn btn-sm btn-light">
               <FaChevronRight /> 
                <span className="ml-1 mr-3 text-center">
                    <img style={{height:30}}
                    src={userImage} 
                    alt="Avatar"
                    className="mr-2 ml-2"/>
                {this.props.t('sidebar.header')}
                </span>                
            </button>

        </div>
        <div className="list-group">
            <button className="p-3 list-group-item-action buttonRemovedCss bg-light">
                <FaUserFriends/>
                <span className="ml-3 mr-5"> {"  "} 
                    <Link className="anchor_no_decoration" to="/applications" >{this.props.t('sidebar.1')}</Link> 
                </span>
            </button>
            <button className="p-3 list-group-item-action buttonRemovedCss bg-light">
                <FaCalendar/>
                <span className="ml-3 mr-5"> {"  "} 
                    <Link className="anchor_no_decoration" to="/applications" >{this.props.t('sidebar.2')} </Link>
                </span></button>
            <button className="p-3 list-group-item-action buttonRemovedCss bg-light">
                <FaSignOutAlt/>
                <span className="ml-3 mr-5"> {"  "}  
                    <Link className="anchor_no_decoration" to="/applications" >{this.props.t('sidebar.3')} </Link>
                </span></button>
        </div>
        
    </div> 
  );
    }
}
 
export default SideBar;