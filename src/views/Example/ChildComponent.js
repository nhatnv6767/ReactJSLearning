import React from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: "",
        lastName: "",
    }

    render() {
        let { name, age, address } = this.props
        console.log('>>>> Check props: ', this.props)
        return (
            <>
                <div>CHILD COMPONENT: {name} - {age} - {address}</div>
            </>
        )
    }
}

export default ChildComponent;