import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'CBBang',
        channel: 'Balangh'
    }

    /**
     * JSX => return block
     */

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {

        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    <br />
                    My name is {this.state['name']}
                </div>
                <div className="second">
                    My Channel is {this.state.channel}
                </div>
            </>

        )
    }
}

export default MyComponent;