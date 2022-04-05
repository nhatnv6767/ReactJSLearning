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
    render() {
        // Data truyền qua props của React thông qua redux
        console.log(">>> Check props Redux: ", this.props.dataRedux)
        return (
            <>
                <div>
                    Hello world from Homepage!
                </div>
                <br />
                <div>
                    <img
                        src={logo}
                        style={{ width: '80%', height: '80%' }}
                    />
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

// liên kết redux và react trong component Home
export default connect(mapStateToProps)(Color(Home));