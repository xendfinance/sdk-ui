import React, { ReactChild, ReactNode } from "react";
import personalImage from '../../../images/personal.svg';
import groupImage from '../../../images/groups.svg'
import moreImage from '../../../images/more.svg'
import { useHistory } from "react-router-dom";

function Navbar(){
    
    const history = useHistory();
 
    return (
        <div className="navbar">
            <ul>
                <li>
                    <div className="container"  onClick={() => history.push(`/`)}>
                        <div className="row">
                            <img src={personalImage} alt="Personal Icon"/>
                        </div>
                        <div className="row">
                            Personal
                        </div>
                    </div>  
                </li>
                <li>
                    <div className="container" onClick={() => history.push(`/esusu`)}>
                        <div className="row">
                            <img src={groupImage} alt="Group Icon"/>
                        </div>
                        <div className="row">
                            ESUSU
                        </div>
                    </div>      
                </li>
                <li>
                    <div className="container">
                        <div className="row">
                            <img src={groupImage} alt="More Icon"/>
                        </div>
                        <div className="row">
                            Cooporative
                        </div>
                    </div>      
                </li>
                <li>
                    <div className="container">
                        <div className="row">
                            <img src={moreImage} alt="More Icon"/>
                        </div>
                        <div className="row">
                            More
                        </div>
                    </div>     
                </li>
            </ul>
        </div>  
    )
}
export default Navbar;