import React, { Component } from 'react';
import axios from 'axios';

class ListUser extends Component {
    state = {
        listUsers: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }
    // khi chạy sẽ chạy vào render lần 1 và sau đó sẽ chạy vào componentDidMount
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default ListUser;