import React, {Component} from 'react'

class FormTime extends Component{

    render(){
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Add event</h2>
                </div>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="title" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" className="form-control" placeholder="description" />
                    </div>
                    <div className="form-group">
                        <input type="date" name="title" className="form-control" placeholder="Starting date" />
                    </div>
                    <div className="form-group">
                        <input type="date" name="title" className="form-control" placeholder="final date" />
                    </div>
                    <div class="input-group">
					    <div class="input-group-prepend">
						    <label class="input-group-text" for="inputGroupSelect01">Evento del dia</label>
					    </div>
					    <select name="tipo" class="custom-select" id="inputGroupSelect01">
						    <option value="1">si</option>
						    <option value="2">no</option>
					    </select>

				    </div>
                    <button className="btn btn-success btn-block">Add Event</button>
                </form>
            </div>
        )
    }
}
export default FormTime;