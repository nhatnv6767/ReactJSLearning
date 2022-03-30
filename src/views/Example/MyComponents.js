import React from "react";

class MyComponent extends React.Component {

    /**
     * 
     */
    render() {
        let name = 'None';

        return (
            <div>
                {console.log('My name in console log is: ', name)}
                Hello Component, My name is {name}
            </div>
        )
    }
}

export default MyComponent;