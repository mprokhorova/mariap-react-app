import './App.css';
import './App';
import {Route} from 'react-router-dom';
/*import {Switch} from 'react-router-dom'; */

import ProjectPage from './pages/project';
import MePage from './pages/me-page';
import WhyMe from './pages/why-me';
import LetUsTalk from './pages/let-s-talk';
import Awards from './pages/awards';


function App() {
  return (
    <div>
          <Route path='./pages/me-page'>
            <me-MePage/>
          </Route>

          <Route>
            <ProjectPage/>
          </Route>

          <Route>
            <Awards/>
          </Route>  

          <Route>
            <WhyMe/>
          </Route> 

          <Route>
            <LetUsTalk/>
          </Route> 
    </div>
  );
}

export default App;
