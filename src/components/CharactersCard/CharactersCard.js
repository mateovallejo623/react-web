import { Component } from 'react';
import { Link } from "react-router-dom";

export default class CharactersCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            button: true
        }
    }

    componentDidMount(){
        let storage = []
        storage = JSON.parse(localStorage.getItem('favoritos'))
        if(!storage.includes(this.props.data.id)){
            this.setState({ button: false })
        } else {
            this.setState({ button: true })
        }
    }

    añadirSacar(id) {
        let storage = []
        storage = JSON.parse(localStorage.getItem('favoritos'))
        if(!storage.includes(id)){
            storage.push(id)
            localStorage.setItem('favoritos', JSON.stringify(storage))
            this.setState({ button: true })
        } else {
            let storageFiltrado = storage.filter((ID) => ID !== id)
            localStorage.setItem('favoritos', JSON.stringify(storageFiltrado))
            this.setState({ button: false })
        }
    }

    render(){
        return(
            <div>
                <Link to={'/detail/id/' + this.props.data.id}>
                <img src={this.props.data.image}/>
                <h4>{this.props.data.name}</h4>
                <p>{this.props.data.species}</p>
                </Link>
                {this.state.button ? 
                <button onClick={() => this.añadirSacar(this.props.data.id)}>Quitar</button>
                :
                <button onClick={() => this.añadirSacar(this.props.data.id)}>Añadir</button>
                }
            </div>
        )
    }
}