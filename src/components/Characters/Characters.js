import CharactersCard from '../CharactersCard/CharactersCard';
import { Component } from 'react';

export default class Characters extends Component{
    constructor(){
        super()
        this.state = {
            data: [],
            page: 1
        }
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character/?page=' + this.state.page)
        .then(res => res.json())
        .then(data => this.setState({ data: data.results, page: 2}))
        .catch(err => console.log(err))
    }

    moreCards(){
        fetch('https://rickandmortyapi.com/api/character/?page=' + this.state.page)
        .then(res => res.json())
        .then(data => this.setState({ page: this.state.page + 1, data: this.state.data.concat(data.results)}))
        .then(console.log(this.state.data))
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
            {this.state.data.map((card, idx) => <CharactersCard key={card + idx} data={card}/>)}
            <button onClick={() => this.moreCards()}>Más Cartas</button>
            </div>
        )
    }
}