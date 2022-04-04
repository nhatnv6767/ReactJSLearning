import React, { Component } from 'react';
import axios from 'axios';

class ListUser extends Component {
    componentDidMount() {
        // promise của JS
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => {
                console.log(">>>> Check res: ", res.data.data);
            })
    }
    // khi chạy sẽ chạy vào render lần 1 và sau đó sẽ chạy vào componentDidMount
    render() {
        return (
            <div>
                List User
            </div>
        );
    }
}

export default ListUser;