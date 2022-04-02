import React, { Component } from 'react';
import './ListTodo.scss';

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
                    <div className="todo-child">
                        <span>Todo 1</span>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                    <div className="todo-child">
                        <span>Todo 1</span>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                    <div className="todo-child">
                        <span>Todo 1</span>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListToDo;