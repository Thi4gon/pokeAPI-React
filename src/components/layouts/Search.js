import React, { Component } from 'react';
import  styled  from 'styled-components';


const Button = styled.input`
   height: 30px;
   display: flex;
   flex-wrap: wrap;
   align-content: center;
`

const Busca = styled.input`
   height: 30px;

`

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Um nome foi enviado: ' + this.state.value);
        event.preventDefault();
      }
    

    render() {
        return (
            <div className="container">
              <div className="row form-group ml-2 mb-0 pb-0">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.handleChange}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Nome</label>
                </div>
                <div className="form-check ml-2">
                    <input type="checkbox" className="form-check-input" id="exampleCheck2"/>
                    <label className="form-check-label" htmlFor="exampleCheck2">Habilidade</label>
                </div>
              </div>

            <form onSubmit={this.handleSubmit} className="row mt-0">
             
                <Busca type="text" className="form-control mb-2 col-10" placeholder="Nome, número ou habilidade" value={this.state.value} onChange={this.handleChange} />
               
                <Button type="submit" className="btn btn-primary col-2 align-middle" value="Buscar"/>
            </form>

            </div>
        )
    }
}
