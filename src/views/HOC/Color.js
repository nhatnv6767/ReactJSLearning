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
    // Khi return, để cho thằng React hiểu là chúng ta đang viết 1 component
    // thí bắt buộc phải truyền props vào nó
    // nhận đầu vào như thế nào thì phải nhả ra như vậy
    // Khi nhận đầu vào là Home component, thì props là props của Home component
    // nó có cái gì thì phải truyền y nguyên lại, vì vậy phải bắt buộc có props => rule của React
    return (props) => (
        <div style={{ color: colorRandom }}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default Color;