import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import saga from './saga.js'
const listsaga = createSagaMiddleware()
const store = createStore(reducers,applyMiddleware(listsaga))
listsaga.run(saga)
export default store