import React, { Component } from 'react';

class AddTodo extends React.Component {
    state = {
        title: ''
    }
    render() {
        return (
            <div className="add-todo">
                <input type="text" />
                <button type="button" className="add">Add</button>
            </div>
        );
    }
}

export default AddTodo;