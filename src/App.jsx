import './App.css';
import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import routes from './settings/routes'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            routes.map((route) => 
              <Route path={route.url} element={route.page}/>
            )
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
