import React, { Component } from 'react';

class Welcome extends Component{

  constructor(){
    super();
    this.state = {
      nb: 0
    };
  }

  ajouterUn(){
    this.setState({
      nb: this.state.nb + 1
    });
  }

    render(){
        return (
          <div> 
              <h1>coucou {this.props.name} </h1>  
              <h2>ok</h2>
              <p>compteur : {this.state.nb}</p>
              <button onClick={() => this.ajouterUn()}>Ajouter</button>
          </div>
        );
    }
}

export default Welcome;