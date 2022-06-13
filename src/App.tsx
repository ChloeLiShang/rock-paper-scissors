import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from './Game';
import NotFound  from './NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
