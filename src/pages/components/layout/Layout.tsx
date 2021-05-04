import React, { ReactChild, ReactNode } from "react";
import Navbar from './Navbar'


type Props = {
    children: ReactChild;
    extra?: ReactNode;
    title?: string;
    description?: string;
    balance?: string;
  };


function Layout(props: Props){
    
 
    return (
        <div >
            <div className='layout-body'> 
                 {props.children}
            </div>
            <Navbar />
        </div>  
    )
}
export default Layout;