import React, { ReactChild, ReactNode } from "react";
import Layout from '../components/layout/Layout'
import TopBar from '../esusu/TopBar'
import Monies from './EsusuMonies'
import SearchTab from './SearchTab'
import EsusuGroups from './EsusuGroups'

function Personal(){

    return(
        <Layout> 
            <div>
                <TopBar />
                <Monies />
                <SearchTab />
                <EsusuGroups />
                <EsusuGroups />
                <EsusuGroups />
            </div>    
        </Layout>
    )

}
export default Personal;