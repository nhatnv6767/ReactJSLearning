import React from "react";

class MyComponent extends React.Component {

    state = {
    }
    render() {
        return (
            <>
                <form>
                    <label for="fname">First Name</label><br />
                    <input type="text" id="fname" name="fname" value="John" /><br />
                    <label for="lname">Last Name</label><br />
                    <input type="text" id="lname" name="lname" value="Doe" /><br />
                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}

export default MyComponent;