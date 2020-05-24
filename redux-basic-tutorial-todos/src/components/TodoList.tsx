import React from 'react'
import PropTypes from 'prop-types'
import TodoComponent from './Todo'
import { Todo } from '../todo'

const TodoList = ({ todos, toggleTodo }: { todos: Todo[], toggleTodo: (id: number) => void }) => (
    <ul>
        {todos.map(todo =>
            <TodoComponent
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />
        )}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList
