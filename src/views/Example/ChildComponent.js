import React from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: "",
        lastName: "",
    }

    render() {
        let { name, age } = this.props
        console.log('>>>> Check props: ', this.props)
        return (
            <>
                <div>CHILD COMPONENT: {name} - {age}</div>
            </>
        )
    }
}

export default ChildComponent;