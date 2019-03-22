import React,{Component} from 'react';

class PlayerForm extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            punc:''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e){
        const {value, name} = e.target;
        
        this.setState({
            [name]: value
            
        })
        
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddPlayer(this.state)
        console.log(this.state)
    }
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <h2 >Add Player</h2>
                </div>
                <form className="card-body" onSubmit={this.handleSubmit}>
                   <div className="form-group">
                        <input type="text" name="name" onChange={this.handleInput} className="form-control" placeholder="add name"  />
                    </div>
                    <div className="form-group">
                        <input type="number" min="0" max="3000000000" name="punc" onChange={this.handleInput} className="form-control" placeholder="add Punctuation"  />
                    </div>
                    <button className="btn btn-success btn-block">add Player</button>
                </form>
            </div>
        )
    }

}
export default PlayerForm;