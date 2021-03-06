import React, { Component } from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';
import Color from '../HOC/Color'

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        // Khi nhấn vào nút edit, chúng ta gán giá trị bằng todo mà chúng ta muốn sửa
        editTodo: {}
    }

    addNewTodo = (todo) => {

        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Wow so easy!")
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos
        // filter sẽ lọc ra 1 array mới
        // mảng đó sẽ bỏ đi cái todo của mình ra
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Delete succeed!")
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;
        // when save
        // editTodo: todo luu trong state = todo vua nhan vao
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];
            // cần tìm xem nó ở phần tử thứ mấy
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id))

            // update object's name property.
            listTodosCopy[objIndex].title = editTodo.title
            this.setState({
                listTodos: listTodosCopy,
                // khi set bằng rỗng thì nút save sẽ chuyển thành nút edit
                editTodo: {}
            })
            toast.success("Update todo succeed!")
            return;
        }
        // when edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        // let listTodos = this.state.listTodos
        let { listTodos, editTodo } = this.state;
        // nếu Length = 0 => true => is Empty
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>>check empty object: ', isEmptyObj);
        return (
            <>
                <p>
                    Simple TODO Apps with React.js
                </p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj == true ?
                                            <span> {index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input
                                                            value={editTodo.title}
                                                            onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>
                                        }
                                        <button
                                            className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button
                                            className="delete"
                                            onClick={() => this.handleDeleteTodo(item)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div >

            </>
        );
    }
}

export default (ListTodo);