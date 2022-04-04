// HOC: Higher order component

import React from 'react'

function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

// truyền vào 1 component thay vì là 1 biến như bình thường
const Color = (WrappedComponent) => {
    const colorRandom = getRandomColor()
    return (props) => (
        <div style={{ color: colorRandom }}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default Color;