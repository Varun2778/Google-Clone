import React from 'react';
import './App.css';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';


function App() {
  return (
    // BEM
    <Router>
    <div className="App">
      
        <Switch>
        
        <Route exact path='/search'>
          <SearchPage/>
          
        </Route>
          
        
          
        

        {/* <Switch exact path="/">
        {/* Home (the one with the search on) */}
        
        <Route exact path='/'>
        <Home/>
        </Route>
        
        

        {/* Search Page (The results Page) */} 

        </Switch>
        
      
     </div>
     </Router>
  );
}

export default App;
