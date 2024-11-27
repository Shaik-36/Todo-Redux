import {createSlice, nanoid} from '@reduxjs/toolkit'


const initialState = {
    TodosArray: [
        {
            id: 1,
            text: "Hello"
        }
    ]
}


export const todoSlice = createSlice({

    name: "TodosArray",
    initialState,

    reducers: {

        // Add Todo
        addTodo: (state, action) => {

            const newTodo = {
                id: nanoid(),
                text: action.payload
            }

            state.TodosArray.push(newTodo)
        },

        // Remove Todo
        removeTodo: (state, action) => {

            // Get the current state of TodosArray using state and remove using filter
            state.TodosArray = state.TodosArray.filter((eachTodo) => eachTodo.id !== action.payload )

        },

        // Update Todo
        updateTodo: (state, action) => {

            // Get the current state of todo list 
            state.TodosArray = state.TodosArray.map((prevTodo) => eachTodo.id ? action.payload.text : prevTodo)
        },

        // Delete Todo
        deleteTodo: (state, action) => {

            state.TodosArray = state.TodosArray.filter((eachTodo) => eachTodo.id !== action.payload.id)
        }


    }
})

// For to be used in Components
export const {addTodo, removeTodo, updateTodo, deleteTodo} = todoSlice.actions

// For to make store aware of the reducers
export default todoSlice.reducer

