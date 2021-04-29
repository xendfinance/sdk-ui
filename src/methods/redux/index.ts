
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import _const from './_const';

const reducers = combineReducers({
   //this is where all my reducer files will be

})

async function reduxstore() {
    let initstore: any = undefined;
  
    return createStore(
      reducers,
      initstore,
      composeWithDevTools(
        applyMiddleware(
          thunk,
          // saver
        ),
      )
    )
  }
  export default reduxstore;