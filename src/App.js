import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { players } from './players.json';
import PlayerForm from './component/PlayerForm';
import Try from './component/Try';
import FormTime from './component/FormTime';

class App extends Component {
  constructor(){
    super();
    this.state = {
      players: players,
      numTry:''
     
    }
    
    this.handelAddPlayer = this.handelAddPlayer.bind(this)
    this.handelAddTry = this.handelAddTry.bind(this)
  }

handelAddPlayer(player){
  this.setState({
    players: [...this.state.players, player]
  })
}
handelAddTry(num){
this.setState({
  numTry: num
})

}
  render() {
  
  const p = this.state.players.sort((a, b)=>{
   return (b.punc - a.punc) ;
  })
  
  
  const player =  p.map((player, i) =>{

    return (
        <div className="card mt-3">
            <span className="badge badge-pill badge-danger ">{i +1}-{player.name }--{ player.punc}</span>
        </div>
      )
    })
    return (
      <div className="App">
        <header className="App-header ">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container">
            <div className="row">
            <div className="col-md-4">
                <PlayerForm onAddPlayer={this.handelAddPlayer}/>
                <Try onAddTry={this.handelAddTry}/>
              </div>
              <div className="col-md-4">
                <h2>list of players</h2>
                {player}
              </div>
              <div className="col-md-4">
                  <FormTime/>
              </div>
             
              
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
