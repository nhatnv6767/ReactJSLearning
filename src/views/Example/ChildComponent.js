import React from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: "",
        lastName: "",
    }

    render() {
        let { name, age, address, arrJobs } = this.props
        // console.log('>>>> Check props: ', this.props)
        let a = '';
        return (
            <>
                <div className="job-lists">
                    {
                        a = arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                    {console.log('>>>> Check map array: ', a)}
                </div>
            </>
        )
    }
}

export default ChildComponent;