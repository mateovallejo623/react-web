import { Component } from "react";

export default class FavoritosCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character/' + this.props.match.params.id)
        .then(res => res.json())
        .then(data => this.setState({ data: data }))
        .catch(err => console.log(err))
    }

    render(){
        return(
            <main>
                <img src={this.state.data.image}/>
                <h1>{this.state.data.name}</h1>
                <p>{this.state.data.gender}</p>
            </main>
        )
    }
}