import React from "react";

class MyComponent extends React.Component {

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

    render() {
        return (
            <>
                <form>
                    <label for="fname">First Name</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label for="lname">Last Name</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}

export default MyComponent;