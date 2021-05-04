import React, { ReactChild, ReactNode } from "react";
import ToolTip from '../components/Tooltip'

function PersonalMonies(){

    return(
        <div className="monies">
            <div className='share-balance flex  justify-space-around'>
                <div className="mt2">
                    <div className="monies-label flex">
                        <div className="mr1">Share Balance</div> <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <div className='monies-values'>
                        0.8999 VBUSD
                    </div>
                </div>
                <div className="mt2">
                    <div className="monies-label flex">
                        <div className="mr1">Share Balance</div> <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <div className='monies-values'>
                        0.8999 VBUSD
                    </div>
                </div>
               
            </div>
            <div className='share-balance flex  justify-space-around'>
                <div className="mt2">
                    <div className="monies-label flex">
                        <div className="mr1">Share Balance</div> <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <div className='monies-values'>
                        0.8999 VBUSD
                    </div>
                </div>
                <div className="w3"></div>
            </div>
        </div>
    )

}
export default PersonalMonies;

