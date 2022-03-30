import React from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: "",
        lastName: "",
    }

    render() {
        console.log('>>>> Check props: ', this.props)
        return (
            <>
                <div>CHILD COMPONENT: {this.props.name}</div>
            </>
        )
    }
}

export default ChildComponent;