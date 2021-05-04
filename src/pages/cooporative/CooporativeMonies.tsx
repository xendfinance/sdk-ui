import React, { ReactChild, ReactNode } from "react";
import Button from "../components/Button";
import ToolTip from '../components/Tooltip'

function EsusuMonies(){

    return(
        <div className="esusu-monies">
            <div className='share-balance flex  justify-space-around'>
                <div className="mt1">
                    <div className="monies-label flex">
                        <div className="mr1">Share Balance</div> <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <div className='monies-values'>
                        0.002300 DAI
                    </div>
                </div>
                <div className="mt1">
                    <div className="monies-label flex">
                        <div className="mr1">Accumulated Interest</div> <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <div className='monies-values'>
                        0.002300 XEND
                    </div>
                </div>
            </div>
        </div>
    )

}
export default EsusuMonies;

