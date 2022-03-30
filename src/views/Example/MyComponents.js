import React from "react";

class MyComponent extends React.Component {

    /**
     * JSX => return block
     */
    render() {
        let name = 'None';

        return (
            <>
                <div className="first">
                    {console.log('My name in console log is: ', name)}
                    Hello Component, My name is {name}
                </div>
                <div className="second">
                    div 2
                </div>
            </>

        )
    }
}

export default MyComponent;