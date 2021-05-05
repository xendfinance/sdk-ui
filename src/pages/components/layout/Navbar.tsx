import React, { ReactChild, ReactNode } from "react";
import personalImage from '../../../images/personal.svg';
import groupImage from '../../../images/groups.svg'
import moreImage from '../../../images/more.svg'
import { useHistory, useLocation } from "react-router-dom";

function Navbar(){
    
    const history = useHistory();
    let { pathname } = useLocation();

    console.log(pathname, 'path name is consoled')
 
    return (
        <div className="navbar">
            <ul>
                <li>
                     <div className={checkcurrent(['/'], pathname).active}   onClick={() => history.push(`/`)}>
                         <div className="">
                             <img src={personalImage} alt="Personal Icon"/>
                         </div>
                         <div className="">
                             Personal
                         </div>
                     </div>  
                </li>
                <li>
                    <div className={checkcurrent(['/esusu'], pathname).active}  onClick={() => history.push(`/esusu`)}>
                        <div className="">
                            <img src={groupImage} alt="Group Icon"/>
                        </div>
                        <div className="">
                            ESUSU
                        </div>
                    </div>  
                </li>
                <li>
                    <div className={checkcurrent(['/cooporative'], pathname).active}  onClick={() => history.push(`/cooporative`)}>
                        <div className="">
                            <img src={groupImage} alt="Group Icon"/>
                        </div>
                        <div className="">
                            Cooperative
                        </div>
                    </div>  
                </li>
                <li>
                    <div className="mt1">
                        <div className="">
                            <img src={moreImage} alt="More Icon"/>
                        </div>
                        <div className="">
                            More
                        </div>
                    </div>     
                </li>
            </ul>
        </div>  
    )
}
export default Navbar;
          
function checkcurrent(paths: Array<string>, pathname: string) {
    let active = paths.includes(pathname) ? 'active' : '';
    let isactive = active ? false : true;
    return {
        active,
        isactive
    }
}