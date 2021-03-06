import React, { Component } from 'react'
import  styled  from 'styled-components';
import { Link } from 'react-router-dom';


const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0, 0.25), 0 10px 10px rgba(0,0,0, 0.22);
    }
    -website-user-select:none;
    user-select:none;
    cursor:pointer;
`


export default class PokemonCard extends Component {
state={
    name:'',
    imageUrl:'',
    pokemonIndex: ''    
}

componentDidMount(){

    const {name,url} = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];

    this.setState({
        name,
        pokemonIndex
    });
}

    render() {

        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <Link to={`pokemon/${this.state.pokemonIndex}`}>
            <Card className="card">
                <h5 className="card-header">{this.state.pokemonIndex}</h5>
               <div className="card-body mx-auto">
        <h6 className="card-title">{
        this.state.name
        .toLowerCase()
        .split(" ")
        .map(
            letter => letter.charAt(0).toUpperCase() + letter.substring(1)
        )
        .join(' ')}
        </h6>
               </div>
            </Card>
            </Link>
        </div>
        )
    }
}
