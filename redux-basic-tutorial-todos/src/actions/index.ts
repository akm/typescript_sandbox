export const ADD_TODO = 'ADD_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export interface AddTodoAction {
    type: typeof ADD_TODO
    id: number
    text: string
}

export interface SetVisibilityFilterAction {
    type: typeof SET_VISIBILITY_FILTER
    filter: VisibilityFilter
}

export interface ToggleTodoAction {
    type: typeof TOGGLE_TODO
    id: number
}

let nextTodoId = 0
export const addTodo = (text: string): AddTodoAction => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = (filter: VisibilityFilter): SetVisibilityFilterAction => ({
    type: SET_VISIBILITY_FILTER,
    filter
})

export const toggleTodo = (id: number): ToggleTodoAction => ({
    type: TOGGLE_TODO,
    id
})

export type VisibilityFilter = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'
// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// }
