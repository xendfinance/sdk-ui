import React, { ReactChild, ReactNode } from "react";
import ToolTip from "../components/Tooltip";
import Botton from '../Button'
import Button from "../Button";
function PersonalMonies(){

    return(
        <div className="personal-savings-tab ml2 mr2 mt2 mb2">

            <div className='share-balance flex ml5 mr5'>
                <div >
                    <div className="label">
                        Share Balance <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <br />
                    <div className='bold'>
                        0.8999
                    </div>
                </div>
                <div className='ml5'>
                    <div className="label">
                        Share Balance <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <br />
                    <div className='bold'>
                        0.8999
                    </div>
                </div>
            </div>
            <div className='share-balance flex mt5 ml5 mr5'>
                <div >
                    <div className="label">
                        Share Balance <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <br />
                    <div className='bold'>
                        0.8999
                    </div>
                </div>
                <div className='ml5'>
                    <div className="label">
                        Share Balance <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <br />
                    <div className='bold'>
                        0.8999
                    </div>
                </div>
            </div>

            <div className='share-balance flex mt5 ml5 mr5'>
                <div >
                    <Button 
                        block
                    >
                        Save
                    </Button>
                </div>
                <div className='ml5'>
                    <Button 
                        block
                        type='secondary'
                    >
                        Withdraw
                    </Button>
                </div>
            </div>
        </div>
    )

}
export default PersonalMonies;