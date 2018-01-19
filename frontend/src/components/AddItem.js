import React from 'react';

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = { value : ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        alert(this.state.value);
        e.preventDefault();
    }

    render () {
        return(
            <div className="container"> 
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Add Item: 
                    <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control"/>
                    </label>
                    <br/>
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </form>
            </div>
        )
    }
}

export default AddItem;