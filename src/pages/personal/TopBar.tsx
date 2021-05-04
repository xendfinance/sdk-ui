import React, { ReactChild, ReactNode } from "react";
import Layout from '../components/layout/Layout'
import ToolTip from "../components/Tooltip";

function TopBar(){

    return(
            <div className="layout-top">
                <div className="flex pt2">
                    <div className='title capitalize pl5'>Personal Savings</div>
                    <div className="w7"></div>
                    <div className='top-connection-lg '>
                        <div className="connected">
                            <div className="connect-wallet-text">
                                Connected
                                <br />
                                <div>0x8909pi001290387hhvxhvx838</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='personal-protocol-select'>
                    <div >
                        <span style={{fontSize:'11px'}}><ToolTip  content="This cycle currently has just one member." /></span>
                        <select name="protocols" id="protocols" style={{border:'0px', fontSize:'11.985px', color : '#969696', backgroundColor:'#F6F6F6'}}>
                            <option value="Venus">Lending Protocol</option>
                        </select>
                    </div>
                </div>
            </div>
    )

}
export default TopBar;

//     return(
//             <div className="layout-top">
//                 <div className="flex pt2">
//                     <div className='title capitalize pl5'>Personal Savings</div>
//                     <div className="w7"></div>
//                     <div className='top-connection-lg '>
//                         <div className="connected">
//                             <div className="connect-wallet-text">Connected
//                                 <br />
//                                 <div>0x8909pi001290387hhvxhvx838</div>
//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <ToolTip content="This cycle currently has just one member." />
//                     <select name="protocols" id="protocols">
//                         <option value="Venus">Lending Protocol</option>
//                     </select>
//                 </div>
                         
//             </div>
//     )

// }
// export default TopBar;