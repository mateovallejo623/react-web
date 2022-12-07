import { Component } from "react";

import FavoritosCard from '../FavoritosCard/FavoritosCard';

export default class Favoritos extends Component{
    constructor(props){
        super(props)
        this.state = {
            favData: []
        }
    }

    componentDidMount(){
        let favoritosData = [];
        let favoritos = [];
        favoritos = JSON.parse(localStorage.getItem('favoritos'))
        favoritos.forEach((id) => {
            fetch('https://rickandmortyapi.com/api/character/' + id)
            .then(res => res.json())
            .then(data => {favoritosData.push(data)
                          this.setState({ favData: favoritosData})})
            .catch(err => console.log(err))
        })
    }

    borrar(id){
        let favFilter = this.state.favData.filter(Card => Card.id !== id);
        let storage = JSON.parse(localStorage.getItem('favoritos'))
        let newStorage = storage.filter(ID => ID !== id)
        localStorage.setItem('favoritos', JSON.stringify(newStorage))
        this.setState({ favData: favFilter });
    }

    render(){
        return(
            <main>
                <h1>Favoritos</h1>
                {this.state.favData.map((card, idx) => <FavoritosCard data={card} key={card + idx} borrar={(id) => this.borrar(id)}/>)}
            </main>
        )
    }
}