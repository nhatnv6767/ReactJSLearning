import React from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: "",
        lastName: "",
    }

    handleChangeFirstName = (event) => {
        this.setState(
            {
                firstName: event.target.value
            }
        )
    }

    handleChangeLastName = (event) => {
        this.setState(
            {
                lastName: event.target.value
            }
        )
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>>> Check data input: ', this.state)
    }

    render() {
        return (
            <>
                <div>CHILD COMPONENT</div>
            </>
        )
    }
}

export default ChildComponent;