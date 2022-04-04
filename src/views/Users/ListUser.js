import React, { Component } from 'react';
import axios from 'axios';

class ListUser extends Component {
    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                console.log(">>>> Check res: ", res);
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