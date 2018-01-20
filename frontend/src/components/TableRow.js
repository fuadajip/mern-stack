import React from 'react';
import {Link} from 'react-router-dom';

class TableRow extends React.Component {
    render(){
        return (
            <tr>
                <td>{this.props.obj._id}</td>
                <td>{this.props.obj.item}</td>
                <td>
                <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default TableRow;