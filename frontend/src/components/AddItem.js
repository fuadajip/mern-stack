import React from 'react';
import ItemService from './ItemService';

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = { value : ''};
        this.addItemService = new ItemService();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.addItemService.sendData(this.state.value);
        this.props.history.push('/all');
    }

    render () {
        return(
            <div className="container"> 
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label> Add Item:   </label>
                                <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control"/>
                            </div>
                            <input type="submit" value="Submit" className="btn btn-primary btn-block"/>
                        </form>
                    </div>
                </div>  
            </div>
        )
    }
}

export default AddItem;