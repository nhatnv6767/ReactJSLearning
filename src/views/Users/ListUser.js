import React, { Component } from 'react';
import axios from 'axios';
import './ListUser.scss';

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

    handleViewDetailUser = (user) => {
        console.log(">>>Check user: ", user)
    }
    // khi chạy sẽ chạy vào render lần 1 và sau đó sẽ chạy vào componentDidMount
    render() {
        let { listUsers } = this.state
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>

                <div className="list-user-content">

                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div
                                    className="child"
                                    key={item.id}
                                    onClick={() => this.handleViewDetailUser(item)}
                                >
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}
// tương đương điều kiện if, vì phải check để sử dụng hàm map, còn nếu listUsers ko check,
// để cho nó rỗng chẳng hạn thì sẽ lỗi
export default ListUser;