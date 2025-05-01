// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
const initialCounterState = { counter: 0, showCounter: false }
const initialAuthState = { isAuthniticated: false }

// ! REDUX TOOLKIT

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthniticated = true;
        },
        logout(state) {
            state.isAuthniticated = false
        }
    }
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});



//? const store = createStore(counterSlice.reducer);
// * bigger applications - multiple state slices -
//! proplem because there can only be one reducer
// passed to create store and when we have multiple slices,we have multiple reducers which we access with .reducer on the different slices.

// Now with standard Redux, there is a combineReducers function

// which we could use for that but we can also ditch Redux here

// and instead import another function from reduxjs/toolkit
// !CONFIGURE STORE


// ! REDUX 
// const reducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return { counter: state.counter++, showCounter: state.showCounter };
//     }
//     if (action.type === 'decrement') {
//         return { counter: state.counter--, showCounter: state.showCounter };
//     }
//     if (action.type === 'increase') {
//         return { counter: state.counter + action.amount, showCounter: state.showCounter }
//     }
//     if (action.type === 'toggle') {
//         return { showCounter: !state.showCounter, counter: state.counter }
//     }
//     return state;
// }

// const store = createStore(counter);
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });

export default store;