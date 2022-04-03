import React, { Component } from 'react';
import { withRouter } from "react-router";

class Home extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000)
    }
    render() {
        console.log(">>> Check props: ", this.props)
        return (
            <div>
                Hello world from Homepage!
            </div>
        );
    }
}

export default Home;