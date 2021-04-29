import React, { ReactChild, ReactNode } from "react";
import Layout from '../components/layout/Layout'
import TopBar from './Top-Bar'
import Monies from './PersonalMonies'
import SavingsTab from './SavingsTab'

function Personal(){

    return(
        <Layout> 
            <div>
                <TopBar />
                <Monies />
                <SavingsTab />
            </div>    
        </Layout>
    )

}
export default Personal;