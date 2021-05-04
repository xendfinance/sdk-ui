import React, { ReactChild, ReactNode } from "react";
import ToolTip from "../components/Tooltip";
import XendLogo from '../../images/Xendfinance-Logo.svg'
import Button from "../components/Button";

function TopBar(){

    return(
            <div className="layout-top">
                <div className="flex pt2 justify-space-between">
                    <div className='esusu-xend-logo'><img src={XendLogo} alt="Personal Icon"/></div>
                    <div className='esusu-protocol-select'>
                        <div >
                            <span style={{fontSize:'9px'}}><ToolTip  content="This cycle currently has just one member." /></span>
                            <select style={{border:'0px', fontSize:' 8.79538px', color : '#969696', backgroundColor:'#F6F6F6'}}>
                                <option value="Venus">Lending Protocol</option>
                            </select>
                        </div>
                    </div>
                    <div className='top-connection-lg mr2'>
                        <div className="not-connected">
                            <div className="connect-wallet-text">
                                Connected
                                <br />
                                <div>0x8909pi001290387hhvxhvx838</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex pt1" >
                    <div className='ml1'>
                        <Button
                            type='secondary'  
                        >
                            My Cooporative Unions
                        </Button>
                    </div>
                    <div className='ml1'>
                        <Button
                            type='secondary'
                        
                        >
                            View Contributions
                        </Button>
                    </div>
                </div>
                         
            </div>
    )

}
export default TopBar;