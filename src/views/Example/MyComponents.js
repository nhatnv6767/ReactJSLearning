import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'None State',
        channel: 'Balangh'
    }

    /**
     * JSX => return block
     */
    render() {

        return (
            <>
                <div className="first">
                    Hello Component, My name is {this.state.name}
                </div>
                <div className="second">
                    My Channel is {this.state.channel}
                </div>
            </>

        )
    }
}

export default MyComponent;