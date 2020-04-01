import React from 'react';
import './App.css';
import Routes from './routes';
import Nav from './components/Nav';
import Store from './store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={Store}>
    <div className="App">
      <Nav/>
      <main>
        <Routes/>
      </main>
    </div>
    </Provider>
  );
}

export default App;
