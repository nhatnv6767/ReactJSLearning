import React, { Component } from 'react';
import { withRouter } from "react-router";
import Color from "../HOC/Color"
import logo from '../../assets/images/reddit.png';
import { connect } from 'react-redux';

class Home extends Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    handleDeleteUser = (user) => {
        console.log(">>> Check user delete: ", user);
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux()
    }
    render() {
        // Data truyền qua props của React thông qua redux
        console.log(">>> Check props Redux: ", this.props.dataRedux)
        let listUsers = this.props.dataRedux
        return (
            <>
                <div>
                    Hello world from Homepage!
                </div>
                <br />
                <div>
                    <img
                        src={logo}
                        style={{ width: '80px', height: '80px' }}
                    />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp;
                                    <span
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => this.handleDeleteUser(item)}>x
                                    </span>
                                    &nbsp;
                                    {/* <span
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => this.handleCreateUser()}>+
                                    </span> */}

                                </div>
                            )
                        })
                    }

                    <button onClick={() => this.handleCreateUser()}>
                        Add new
                    </button>
                </div>
            </>
        );
    }
}

// export default withRouter(Home);
// state ở đây là của Redux
const mapStateToProps = (state) => {
    // state ở trong thằng công nhân Reducer
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // cần phải dispatch 1 action (object)
        // type: Định nghĩa tên của action là gì
        // payload: ví dụ khi đi máy bay thì phải gửi hàng hoá, thì hàng hoá
        // lúc này là payload, tức là dữ liệu muốn mang theo từ cái action đó
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

// liên kết redux và react trong component Home
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));