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

    handleClickButton = () => {
        alert('Click meeeee')
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

                <div className="third">
                    <button onClick={this.handleClickButton()}>Click me</button>
                </div>
            </>

        )
    }
}

export default MyComponent;