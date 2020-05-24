import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilter } from '../actions'
import { AppDispatch } from '../store'
import { Todo } from '../todo'

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

type State = {
    todos: Todo[]
    visibilityFilter: VisibilityFilter
}

type Props = {
    filter: VisibilityFilter
}

const mapStateToProps = (state: State, ownProps: Props) => ({
    todos: getVisibleTodos(state.todos, ownProps.filter)
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    toggleTodo: (id: number) => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
