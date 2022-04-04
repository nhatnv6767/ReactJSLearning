// HOC: Higher order component

import React from 'react'

// truyền vào 1 component thay vì là 1 biến như bình thường
export default Color = (WrappedComponent) => {
    return (
        <div>
            <WrappedComponent />
        </div>
    )
}