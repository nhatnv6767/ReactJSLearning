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
        // console.log(event.target.value, 'event target: ', event.target, 'event object: ', event)
        // Mỗi 1 lần gọi hàm this.setState thì React sẽ nhận được tín hiệu 
        // để cho nó biết nó cần phải set lại biến state, đồng thời gọi lại render() để re-render
        this.state.name = event.target.value // BAD CODE
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert('Click meeeee')
    }
    render() {
        console.log('>>> call render: ', this.state)
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
                    <button onClick={() => { this.handleClickButton() }}>Click me</button>
                </div>
            </>

        )
    }
}

export default MyComponent;