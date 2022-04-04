import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class DetailUser extends Component {
    componentDidMount() {
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