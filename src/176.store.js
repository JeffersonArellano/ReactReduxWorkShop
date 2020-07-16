import { createStore } from 'redux'

//Actions constants names
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

/* Reducer is a pure function that returns
actual state
*/
var initialState = 0

function counter(state = initialState, action) {

    switch (action.type) {

        case INCREMENT:
            return state + 1

        case DECREMENT:
            return state - 1

        default:
            return state
    }
}

/*Store stores the state*/
const store = createStore(counter)

store.subscribe(() => {
    console.log(store.getState())
})

//Actions Creators
const increment = () => {
    return {
        type: INCREMENT
    }
}

const decrement = () => {
    return {
        type: DECREMENT
    }
}

//Actions
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())

//store.getState()
//store.dispatch()
//store.subscribe()

export default store;