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
                        <div className="not-connected">
                            <div className="font16">Connect your wallet</div>
                        </div>
                    </div>
                </div>
                <div>
                    <ToolTip content="This cycle currently has just one member." />
                    <select name="protocols" id="protocols">
                        <option value="Venus">Lending Protocol</option>
                    </select>
                </div>
                         
            </div>
    )

}
export default TopBar;