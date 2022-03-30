import React from "react";

class MyComponent extends React.Component {

    state = {
        firstName: "",
        lastName: "",
    }

    handleChangeFirstName = (event) => {

    }

    render() {
        return (
            <>
                <form>
                    <label for="fname">First Name</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={ }
                    />
                    <br />
                    <label for="lname">Last Name</label><br />
                    <input type="text" value="" /><br />
                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}

export default MyComponent;