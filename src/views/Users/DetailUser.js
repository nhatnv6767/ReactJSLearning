import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios'

class DetailUser extends Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            console.log(">>> Check res: ", res)
        }
    }
    render() {
        console.log(">>> Check props: ", this.props)
        return (
            <div>
                Detail User with id: {this.props.match.params.id}
            </div>
        );
    }
}
// HOC
// lấy các tham số trên URL
export default withRouter(DetailUser);