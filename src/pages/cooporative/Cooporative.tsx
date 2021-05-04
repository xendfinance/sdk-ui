import React, { ReactChild, ReactNode } from "react";
import Layout from '../components/layout/Layout'
import TopBar from './TopBar'
import Monies from './CooporativeMonies'
import SearchTab from './SearchTab'
import CooporativeGroup from './CooporativeGroups'

function Cooporative(){

    return(
        <Layout> 
            <div>
                <TopBar />
                <Monies />
                <SearchTab />
                <CooporativeGroup />
            </div>    
        </Layout>
    )

}
export default Cooporative;