import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Esusu from './components/pages/Esusu';
import Personal from './components/pages/Personal';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <main>
          <Switch>
            <Route exact path="/personal" component={Personal} />
            <Route exact path="/esusu" component={Esusu} />
          </Switch>
        </main>
        <Navigation />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;



const Wrapper = styled.div`
    width: 100%;
    max-width: 460px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    margin: 0 auto;
    height: 100%;

    & main {
      background-color: #F8F8F8;
      padding: 15px;
    }
`;