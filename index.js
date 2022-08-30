const redux = require('@reduxjs/toolkit')
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const { incrementAction, decrementAction} = require('./actions/CounterActions')

const counterReducer = require('./reducers/CounterReducer');

// =================================

const { addItemAction } = require('./actions/ListActions');

const listReducer = require('./reducers/ListReducer');

const allReducer = combineReducer({
    counter: counterReducer,
    list: listReducer
})


const store = createStore(allReducer)
console.log(store.getState())

store.subscribe(()=>{console.log(store.getState().counter)})

store.dispatch(addItemAction('Um novo item'))
store.dispatch(decrementAction(2))
store.dispatch(incrementAction(3))

store.dispatch(incrementAction(5))
