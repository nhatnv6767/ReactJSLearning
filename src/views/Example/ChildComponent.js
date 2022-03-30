import React from "react";

const ChildComponent = (props) => {
    let { arrJobs } = props;
    return (
        <>
            <div className="job-lists">
                {
                    arrJobs.map((item, index) => {
                        if (item.salary >= 500) {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}$
                                </div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}

export default ChildComponent;