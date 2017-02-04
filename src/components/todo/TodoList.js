import React from 'react'
import {TodoItem} from './TodoItem'

export const TodoList = (props) => {
    return (
        <div className="todo-list">
            <ul>
                {props.todos.map(todo => <TodoItem handleToggle={props.handleToggle} key={todo.id} {...todo}/>)}
                {/* ...todo shift all properties to TodoItem 'spread operator'  */}
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired
}
