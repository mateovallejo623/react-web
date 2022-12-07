import { Component } from "react";

import Characters from '../Characters/Characters';

export default class Home extends Component{
    render(){
        return (
            <div>
              <h1>My App in React</h1>
              <main>
              <h2>Personajes de películas</h2>          
              <Characters/>
              </main>
            </div>
          );
    }
}