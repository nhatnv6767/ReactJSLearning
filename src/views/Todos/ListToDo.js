import React, { Component } from 'react';

class ListToDo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
    }
    render() {
        // let listTodos = this.state.listTodos
        let { listTodos } = this.state;
        return (
            <div className="list-todo-container">
                <div className="add-todo">
                    <input type="text" />
                    <button type="button">Add</button>
                </div>
                <div className="list-todo-content">

                </div>
            </div>
        );
    }
}

export default ListToDo;