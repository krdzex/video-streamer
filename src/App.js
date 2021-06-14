
import React from 'react';
import './App.css';
import Header from './Components/Header';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';

function App() {
  return (
    <div className="AppWrapper">
      <BrowserRouter>
        <Header />
        <MainRouter />
      </BrowserRouter>

    </div>
  );
}

export default App;
