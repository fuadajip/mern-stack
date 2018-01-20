import axios from 'axios';

class ItemService {
    sendData(data) {
        axios.post('http://localhost:3020/items/add/', {
                item: data,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    updateData(data, id) {
        axios.post('http://localhost:3020/items/update/' + id, {
                item: data
            })
            .then(res => this.setState({
                items: res.data
            }))
            .catch(err => console.log(err))
    }
}

export default ItemService;