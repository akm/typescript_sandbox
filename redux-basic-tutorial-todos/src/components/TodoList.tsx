import React from 'react'
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

export default TodoList
