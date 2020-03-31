import React, { Fragment } from 'react';
import './App.css';
//import Routes from './routes';
import ButtonAppBar from './components/ButtonAppBar';
import Store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Fragment>
    <Provider store={Store}>
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
    </div>
    </Provider>
    </Fragment>
  );
}

export default App;
