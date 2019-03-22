import React, { Component } from 'react';

class Try extends Component {
    constructor(...prop){
        super();
        this.state= {
            numTry: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleAddTry = this.handleAddTry.bind(this);
    }
    handleInput(e){
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        
    }
    handleAddTry(e){
        e.preventDefault()
        this.props.onAddTry(this.state)
        
        
    }
    render(){
     return(
         <div className="card mt-3">
             <div className="card-header">
                <h2>Add Try</h2>
             </div>
             <form className="card-body" onSubmit={this.handleAddTry}>
                <div className="form-group">
                    <input type="number" min="0" max="100" name="numTry" className="form-control" placeholder="numero de pruebas" onChange={this.handleInput} />

                </div>
               <button className="btn btn-success btn-block">
                   Send
               </button>
            </form>
            
         </div>
     )
    }
}
export default Try;