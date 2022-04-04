
import React from 'react';


import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom'; 

import ProjectPage from './pages/project';
import MePage from './pages/me-page';
import WhyMe from './pages/why-me';
import LetUsTalk from './pages/let-s-talk';
import Awards from './pages/awards';

import './App.css';
import './App';

function App() {
  return (
    <div>
      <Switch>
        <Route path='./pages/me-page'>
            <me-MePage/>
          </Route>

          <Route path ='./pages/project'>
            <ProjectPage/>
          </Route>

          <Route path = './pages/awards'>
            <Awards/>
          </Route>  

          <Route path ='./pages/why-me'>
            <WhyMe/>
          </Route> 

          <Route path ='./pages/let-s-talk'>
            <LetUsTalk/>
          </Route>  
      </Switch>
    </div>
  );
}

export default App;
