import React, { ReactChild, ReactNode } from "react";
import ToolTip from "../components/Tooltip";
import Botton from '../components/Button'
import Button from "../components/Button";
import DaiLogo from '../../images/DaiLogo.svg'


function SavingsTab(){

    return(
        <div className="personal-savings-tab">
            <div className='share-balance flex  justify-space-around '>
                <div className='flex mt3' style={{marginLeft : '-20px'}}> 
                    <span><img src={DaiLogo} alt="Personal Icon"/></span> 
                    <div className="dai-label">DAI</div>
                    <div  className='dai-stable-coin'>
                        <br />
                        DAI Stablecoin
                    </div>
                   
                </div>
                <div className="mt3">
                    <div className="savings-tab-label flex">
                       <div className="mr1">Est. APY </div><ToolTip content="This cycle currently has just one member." />
                    </div>
                    <div className='savings-tab-values'>
                        Up to 23.0324%
                    </div>
                </div>
            </div>
            <div className='share-balance flex  justify-space-around'>
                <div className="mt2">
                    <div className="savings-tab-label flex">
                        <div className='mr1'>Wallet Balance</div> <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <div className='savings-tab-values'>
                        0.000 DAI
                    </div>
                </div>
                <div className="mt2">
                    <div className="savings-tab-label">
                        Savings Balance
                    </div>
                    <div className='savings-tab-values'>
                        0.8999 BUSD
                    </div>
                </div>
            </div>
            <div className='share-balance justify-space-around flex mt3'>
                <div >
                    <Button 
                        block
                    >
                         {' Save '} 
                    </Button>
                </div>
                <div>
                    <Button 
                          type="secondary" 
                    >
                        Withdraw
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default SavingsTab;

//     return(
//         <div className="personal-savings-tab ml2 mr2 mt2 mb2">

//             <div className='share-balance flex ml5 mr5'>
//                 <div className='flex'> 
//                     <span><img src={DaiLogo} alt="Personal Icon"/></span> 
//                     <div className="bold">
                        
//                         DAI 
//                     </div>
                   
//                    <div  className='dai-label'>          
//                         <div className='label'>
//                             <br />
//                             DAI Stablecoin
//                         </div>
//                    </div>
                   
//                 </div>
//                 <div className='ml5'>
//                     <div className="label">
//                         Est. APY <ToolTip content="This cycle currently has just one member." />
//                     </div>
//                     <br />
//                     <div className='bold'>
//                         Up to 23.0324%
//                     </div>
//                 </div>
//             </div>
//             <div className='share-balance flex mt5 ml5 mr5'>
//                 <div >
//                     <div className="label">
//                         Wallet Balance <ToolTip content="This cycle currently has just one member." />
//                     </div>
//                     <br />
//                     <div className='bold'>
//                         0.0000 DAI
//                     </div>
//                 </div>
//                 <div className='ml5'>
//                     <div className="label">
//                         Savings Balance <ToolTip content="This cycle currently has just one member." />
//                     </div>
//                     <br />
//                     <div className='bold'>
//                         0.0000 BUSD
//                     </div>
//                 </div>
//             </div>

//             <div className='share-balance flex mt5 ml5 mr5'>
//                 <div >
//                     <Button 
//                         block
//                     >
//                         Save
//                     </Button>
//                 </div>
//                 <div className='ml5'>
//                     <Button 
//                         block
//                         type='secondary'
//                     >
//                         Withdraw
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )

// }
// export default PersonalMonies;