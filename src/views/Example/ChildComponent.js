import React from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: "",
        lastName: "",
    }

    render() {
        let name = this.props.name;
        let age = this.props.age;
        console.log('>>>> Check props: ', this.props)
        return (
            <>
                <div>CHILD COMPONENT: {name} - {age}</div>
            </>
        )
    }
}

export default ChildComponent;