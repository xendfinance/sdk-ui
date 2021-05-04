import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import Personal from './pages/personal/Personal'
import Esusu from './pages/esusu/Esusu'
import Cooporative from './pages/cooporative/Cooporative'


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Personal} />
                <Route exact path="/esusu" component={Esusu} />
                <Route exact path="/cooporative" component={Cooporative} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;