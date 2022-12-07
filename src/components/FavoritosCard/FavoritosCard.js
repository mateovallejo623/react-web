import { Component } from "react";
import { Link } from "react-router-dom";

export default class FavoritosCard extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    
    render(){
        return(
            <main>
                <Link to={'/detail/id/' + this.props.data.id}>
                <img src={this.props.data.image}/>
                <h1>{this.props.data.name}</h1>
                <p>{this.props.data.gender}</p>
                </Link>
                <button onClick={() => this.props.borrar(this.props.data.id)}>Quitar</button>
            </main>
        )
    }
}