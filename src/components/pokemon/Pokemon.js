import React, { Component } from 'react'
import axios from 'axios'


export default class Pokemon extends Component {
    state = {
       name: '',
       pokemonIndex: '',
       weight: '',
       height: '',
       imageUrl: '',
       types: [],
       stats: {
           hp: '',
           attack: '',
           defense: '',
           speed: '',
           specialAttack: '',
           specialDefense: ''
       }, 
       abilities: ''
    }; 
    
   async componentDidMount(){
       const {pokemonIndex} = this.props.match.params;

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
   // const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;


    const pokemonRes = await axios.get(pokemonUrl);

    const name = pokemonRes.data.name;
    const weight = pokemonRes.data.weight;
    const height = pokemonRes.data.height;
    const imageUrl = pokemonRes.data.sprites.front_default;
    const types = pokemonRes.data.types.map(type=> type.type.name);
    const abilities = pokemonRes.data.abilities.map(ability => {
        return ability.ability.name
    });


    let {hp, attack, defense,speed,specialAttack,specialDefense} = '';

    pokemonRes.data.stats.map(stat=>{
        switch(stat.stat.name){
           case 'hp': 
           hp = stat['base_stat'];
           break;
           case 'attack': 
           attack = stat['base_stat'];
           break;
           case 'defense': 
           defense = stat['base_stat'];
           break;
           case 'speed': 
           speed = stat['base_stat'];
           break;
           case 'specialAttack': 
           specialAttack = stat['base_stat'];
           break;
           case 'specialDefense': 
           specialDefense = stat['base_stat'];
           break;
        }
    })

    this.setState({
        name,
   pokemonIndex,
   weight,
   height,
   imageUrl,
   types,
   stats: {
       hp,
       attack,
       defense,
       speed,
       specialAttack,
       specialDefense
   }, 
   abilities      
   });

    }   



    render() {
        return (
            <div className="col">
              <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-5">
                            <h5>{this.state.pokemonIndex}</h5>
                        </div>
                        <div className="col-7">
                            <div className="float-right">
                                {this.state.types.map(type=>(
                                    <span key={type} className="badge badge-primary badge-pill mr-1">
                                        {type}
                                    </span>
                                    ))}
                             </div>
                        </div>
                    </div> 
                </div>
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <img src={this.state.imageUrl}/>
                        </div>
                        <div className="col-md-9">
                            <h4 className="mx-auto">
                            {this.state.name
                            .toLowerCase()
                            .split(' ')
                            .map(s => s.charAt(0).toUpperCase()+ s.substring(1))
                            .join(' ')
                            }
                            </h4>
                            <div className="row align-items-center">
                        <div className="col-12 col-md-3">Altura: {this.state.height}</div>
                        <div className="col-12 col-md-3">Peso: {this.state.weight}</div>
                        <div className="col-12 col-md-3">Vida: {this.state.stats.hp}</div>
                        <div className="col-12 col-md-3">Ataque: {this.state.stats.attack}</div>
                        <div className="col-12 col-md-3">Defesa: {this.state.stats.defense}</div>
                        <div className="col-12 col-md-3">Velocidade: {this.state.stats.speed}</div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}
