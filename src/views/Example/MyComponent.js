import React from "react";
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            {
                id: 'abcJob1',
                title: 'Developers',
                salary: '500'
            },
            {
                id: 'abcJob2',
                title: 'Testers',
                salary: '400'
            },
            {
                id: 'abcJob3',
                title: 'Project Managers',
                salary: '1000'
            },
        ],
    }


    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>>> Check data input: ', this.state)
    }

    render() {
        return (
            <>
                <AddComponent />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;