import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { VisibilityFilter } from '../actions'

const App = ({ match: { params } }: { match: { params: { filter: VisibilityFilter } } }) => (
    <div>
        <AddTodo />
        <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
        <Footer />
    </div>
)

export default App
