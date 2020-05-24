import { createStore } from 'redux'
import rootReducer from './reducers'

export const store = createStore(rootReducer)

// https://redux.js.org/recipes/usage-with-typescript#typing-configurestore
export type AppDispatch = typeof store.dispatch
