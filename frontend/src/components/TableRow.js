import React from 'react';

class TableRow extends React.Component {
    render(){
        return (
            <tr>
                <td>{this.props.obj._id}</td>
                <td>{this.props.obj.item}</td>
                <td><button className="btn btn-primary">Edit</button> 
                <button className="btn btn-danger">Delete</button></td>
            </tr>
        )
    }
}

export default TableRow;