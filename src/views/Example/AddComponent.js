import React, { Component } from 'react';

class AddComponent extends Component {

    state = {
        firstName: '',
        lastName: '',
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
            <form>
                <label htmlFor="fname">First Name</label><br />
                <input
                    type="text"
                    value={this.state.firstName}
                    onChange={(event) => this.handleChangeFirstName(event)}
                />
                <br />
                <label htmlFor="lname">Last Name</label><br />
                <input
                    type="text"
                    value={this.state.lastName}
                    onChange={(event) => this.handleChangeLastName(event)}
                />
                <br />
                <input
                    type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        );
    }
}

export default AddComponent;