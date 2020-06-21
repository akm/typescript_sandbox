import { createStore } from 'redux'
import rootReducer from './reducers'

export const createRootStore = () => createStore(rootReducer)
type createRootStoreType = typeof createRootStore

export type AppStore = ReturnType<createRootStoreType>
export type AppDispatch = AppStore['dispatch']

export const store = createRootStore()
