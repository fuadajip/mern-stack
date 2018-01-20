import React from 'react';
import axios from 'axios';

import ItemService from './ItemService';

class EditItem extends React.Component {
    constructor(props){
        super(props);
        this.state = 
        { value : { item : ''} };

        this.addItemService = new ItemService();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    componentDidMount(){
        axios.get('http://localhost:3020/items/edit/'+ this.props.match.params.id)
        .then(res => {
            this.setState({value: res.data});
        })
        .catch(err => {
            console.log(err);
        });
    }

    handleChange(e){
        this.setState({value : { item: e.target.value } });
    }

    handleSubmit(e){
        e.preventDefault();
        this.addItemService.updateData(this.state.value.item, this.props.match.params.id);
        this.props.history.push('/all');
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Edit Item:
                    <input type="text" value={this.state.value.item} onChange={this.handleChange} className="form-control" />
                    </label>
                    <input type="submit" value="Update" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}

export default EditItem;