import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import domelec from '../../domelec+.jpg';
import './index.css';

import Home from '../Home';
import Actualities from '../Actualities';
import Chandelier from '../Chandelier';
import Contact from '../../containers/Contact';
import LightSpot from '../LightSpot';
import Lamp from '../Lamp';
import Lamppost from '../Lamppost';
import Nav from '../Nav';
import NotFound  from '../NotFound';
import Partners from '../Partners';
import Presentation from '../Presentation';
import References from '../References';
import WallLight from '../WallLight';



const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        LUMINARIS
         <Nav />
      </header>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/404" exact component={NotFound}/>
        <Route path="/actualités" exact component={Actualities}/>
        <Route path="/appliques" exact component={WallLight}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/lampadaires" exact component={Lamppost}/>
        <Route path="/lampes" exact component={Lamp}/>
        <Route path="/lustres" exact component={Chandelier}/>
        <Route path="/partenaires" exact component={Partners}/>
        <Route path="/présentation" exact component={Presentation}/>
        <Route path="/références" exact component={References}/>
        <Route path="/spots" exact component={LightSpot}/>
          <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
