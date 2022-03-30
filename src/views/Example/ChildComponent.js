import React from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: "",
        lastName: "",
    }

    render() {
        let { name1, age1 } = this.props
        console.log('>>>> Check props: ', this.props)
        return (
            <>
                <div>CHILD COMPONENT: {name1} - {age1}</div>
            </>
        )
    }
}

export default ChildComponent;