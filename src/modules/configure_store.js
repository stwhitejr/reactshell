import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

export default function configureStore({reducers, state}) {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const combinedReducers = combineReducers(reducers);

  const store = createStore(combinedReducers, state, middlewareEnhancer)

  return store
}
