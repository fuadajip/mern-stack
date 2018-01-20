import React from 'react';
import axios from 'axios';

import ItemService from './ItemService';
import TableRow from './TableRow';


class IndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            value : '',
            items: '',
        };
        this.addItemService = new ItemService();
    }

    componentDidMount(){
        axios.get('http://localhost:3020/items/get')
        .then(res => {
            this.setState({items: res.data});
        })
        .catch(err => {
            console.log(err);
        });
    }

    tabRow(){
        if(this.state.items instanceof Array){
            return this.state.items.map((object, i)=>{
                return <TableRow obj={object} key={i} />
            });
        }
    }

    render(){
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Name</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default IndexItem;

