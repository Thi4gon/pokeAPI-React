import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expanded-md navbar-dark bg-dark fixed-top" >

                    <a href="#" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center" id="NavName">pokemons</a>
                </nav>
            </div>
        )
    }
}
