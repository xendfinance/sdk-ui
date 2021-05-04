import React, { ReactChild, ReactNode } from "react";
import Button from "../components/Button";


function EsusuGroups(){

    return(
            <div className='esusu-groups'>
                <div className='flex'>
                    <div className='font9'>pedning</div>
                </div>  
                <div className="flex">
                    <div className='esusu-group-symbol'>
                        MG
                    </div>
                    <div className='esusu-group-name'>
                        Medical Students Group
                    </div>
                </div>
                <div className="flex ">
                    <div className="mt1 ml1">
                        <div className="esusu-group-label">
                            <div className="mr1">Contribution</div>
                        </div>
                        <div className='esusu-group-value'>
                            2,000 DAI
                        </div>
                    </div>
                    <div className="mt1 ml1">
                        <div className="esusu-group-label">
                            <div className="mr1">Payout Interval</div>
                        </div>
                        <div className='esusu-group-value'>
                            12 hours
                        </div>
                    </div>
                    <div className="mt1 ml1">
                        <div className="esusu-group-label">
                            <div className="mr1">Available Slots</div>
                        </div>
                        <div className='esusu-group-value'>
                            0 of 3
                        </div>
                    </div>
                    <div className="esusu-group-join-button ml5">
                        <Button
                            type='secondary'
                        >
                            Join
                        </Button>
                </div>
                </div>
               
            </div>
            
    )

}
export default EsusuGroups;