import React from "react";
import {Switch, Route} from 'react-router-dom';

import Favoritos from './components/Favoritos/Favoritos';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DetailCard from './components/DetailCard/DetailCard'

function App(){
  return (
      <main>
        <Navbar/>
        <Switch>
          <Route exact={true} path={'/'} component={Home}/>
          <Route path={'/favoritos'} component={Favoritos}/>
          <Route path={'/detail/id/:id'} component={DetailCard}/>
        </Switch>
        <Footer/>
      </main>
  );
}

export default App;