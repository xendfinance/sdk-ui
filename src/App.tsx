import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EE from 'event-emitter';
import Theme from './theme/ThemeContext';
import styled, { css } from 'styled-components';

import EsusuContributions from './components/esusu/EsusuContributions';
import Cooperative from './components/pages/Cooperative';
import EsusuJoin from './components/esusu/EsusuJoin';
import Personal from './components/pages/Personal';
import Navigation from './components/Navigation';
import Esusu from './components/pages/Esusu';
import Header from './components/Header';
import EsusuGroup from './components/pages/Esusu/EsusuGroup';
import EsusuCycle from './components/pages/Esusu/EsusuCycle';
import EsusuCycleJoin from './components/pages/Esusu/EsusuCycleJoin';


const emitter = EE();


export const regActivity = (id: string) => {
  emitter.emit('regActivity', id);
}

export const notification = (type: string, message: string) => {
  emitter.emit('notify', type, message);
}


function App() {

  let timeout: any = null;
  const [activities, setActivites] = useState<Array<string>>([])

  const [state, setState] = useState({
    show: false,
    message: "",
    type: ""
  })

  emitter.on('regActivity', (id) => {
    const includes = activities.includes(id);
    if (includes) {
      const n = activities.filter((item) => item !== id)
      setActivites(n);
    } else {
      setActivites(activities.concat(id))
    }
  })


  emitter.on('notify', (type, msg) => {
    onShow(type, msg);
  })

  const onShow = (type: string, msg: string) => {
    if (timeout) {
      clearTimeout(timeout);
      setState({ message: "", type, show: false })
      timeout = setTimeout(() => {
        showNotice(type, msg);
      }, 300)

    } else {
      showNotice(type, msg);
    }
  }

  const showNotice = (type: string, msg: string) => {
    setState({ type, message: msg, show: true })
    timeout = setTimeout(() => {
      setState({ message: '', type: '', show: false });
    }, 6000)
  }




  const loading = () => {
    if (activities.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  const [heading, setHeading] = useState('');
  return (
    <Theme>
      <NotificationBox show={state.show}>
        <p>{state.message}</p>
      </NotificationBox>
      <BrowserRouter>
        <Wrapper activity={loading()}>
          <Header heading={heading} />
          <Loader activity={loading()}>
            <p>Loading</p>
          </Loader>
          <main>
            <Switch>
              <Route exact path="/personal">
                <Personal />
              </Route>
              <Route exact path="/esusu">
                <Esusu />
              </Route>
              <Route exact path="/cooperative">
                <Cooperative />
              </Route>
              <Route exact path='/esusu-contributions'>
                <EsusuContributions />
              </Route>
              <Route exact path='/esusu-join'>
                <EsusuJoin />
              </Route>
              <Route exact path='/esusu/groups'>
                <EsusuGroup />
              </Route>
              <Route exact path='/esusu/group/:id' render={(props) => <EsusuCycle {...props} />}/>
              <Route exact path='/esusu/join/:id' render={(props) => <EsusuCycleJoin {...props} />}/>
            </Switch>
          </main>
          <Navigation setHeading={setHeading} heading={heading} />
        </Wrapper>
      </BrowserRouter>
    </Theme>
  );
}

export default App;


type WProps = {
  activity: boolean
}

const Wrapper = styled.div<WProps>`
    position: relative;
    width: 100%;
    max-width: 460px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    margin: 0 auto;
    height: 100%;

    & main {
      position: relative;
      z-index: 1;
      /* transform: scale(1); */
      grid-area: 2 / 1 / span 1 / span 1;
      background-color: ${p => p.theme.background};
      padding: 15px;
      overflow-y: scroll;
      transition: all 400ms ease;

      ${p => p.activity && css`
        z-index : 0;
        transform: scale(0.8);
      `}
    }
`;

const Loader = styled.div<WProps>`
  grid-area: 2 / 1 / span 1 / span 1;
  position: relative;
  z-index: 0;
  transform: scale(0.8);
  background-color: ${p => p.theme.primary};
  height: 100%;
  overflow-y: hidden;
  padding: 30px;
  transition: all 400ms ease;

  ${p => p.activity && css`
    z-index: 1;
    transform: scale(1);
  `}
`;


type Show = {
  show: boolean
}

const NotificationBox = styled.div<Show>`
  position: fixed;
  top: -100px; 
  z-index: 4;
  background-color: red;
  width: 60%;
  margin: 0 auto;
  left: 20%;
  transition: top 500ms ease;

  ${p => p.show && css`
    top: 16px; 
  `}
`;