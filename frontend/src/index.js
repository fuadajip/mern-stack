import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import AddItem from './components/AddItem';
import IndexItem from './components/IndexItem';
import EditItem from './components/EditItem';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/add" component={AddItem} />
            <Route path="/all" component={IndexItem} />
            <Route path="/edit/:id" component={EditItem}/>
        </div>
    </Router>,
    document.getElementById('root')
);
