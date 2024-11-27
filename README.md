
# Redux main tags to remember

+ Store
+ Slice
+ initialState
+ reducers ( state, action)
+ useSelector
+ useDispatch


# Create a project using Vite

Create a boiler place code using vite

# Create store

-> create folder src/app

-> create store.js


    import {configureStore} from '@reduxjs/toolkit'


    export const store = configureStore({})


# Features

-> create a folder src/features/todo

-> create todoSlice.js

-> Import createSlice, nanoid from reduxjs/tookit


    import {createSlice, nanoid} from '@reduxjs/toolkit'

-> Initialize todoSlice with reducers

    const initialState = {
        TodosArray: [ {  id: 1,  text: "Hello"   }  ]
    }

    export const todoSlice = createSlice({

        name: "TodosArray",
        initialState,

        // Functions or methods
        reducers: {
            addTodo: () => {},
            removeTodo: () => {},
            updateTodo: () => {},
            deleteTodo: () => {}
        }

    })

-> State and Action

    reducers: {

            // Every method in reducers we have access to state and action
            addTodo: (state, action) => {

                    // Create a new todo
                    const newTodo = {
                        id: nanoid(),
                        text: action.payload
            }

            // Add new todo to TodosArray
            state.TodosArray.push(newTodo)
        },
            
        }

-> Do the same for remove method


        // Remove Todo
        removeTodo: (state, action) => {

            // Get the current state of TodosArray using state and remove using filter
            state.TodosArray = state.TodosArray.filter(
                (eachTodo) => 
                eachTodo.id !== action.payload 
                )
        },

-> Export all the methods/ functions

    export const {addTodo, removeTodo, updateTodo, deleteTodo} = todoSlice.actions


-> In summary this is how it is

    import {createSlice, nanoid} from '@reduxjs/toolkit'


    const initialState = {

        TodosArray: []
    }


    export const todoSlice = createSlice({

        name: "TodosArray",
        initialState,

        reducers: {}

    })


    export const {addTodo } = todoSlice.actions

-> To make the store.js aware about the reducers we need to export them again

    export default todoSlice.reducer

### To Make Store aware  Reducers

-> Add the todoReducers in the store to make it aware of todoSlice methods like addTodo..

    import {configureStore} from '@reduxjs/toolkit'
    import todoReducer from '../features/todo/todoSclice'

    export const store = configureStore({

        reducer: todoReducer
    })


## Create Components

+ create two components AddTodo.jsx and Todo.jsx 

  In AddTodo.jsx we are using useDispatch() to send the data to the todoslice 

  In Todo.jsx, we are using useSelector() and useDispatch() to get all the todos data and then display it on the screen. Ande also remove the todo

-> `In AddTodo.jsx`

    import React, {useState} from 'react'
    import { useDispatch } from 'react-redux'
    import { addTodo } from '../../features/todo/todoSlice'

    function AddTodo() {

            const [input, setInput] = useState('')

            // Get the addTodo function using useDispatch
            const dispatch = useDispatch()

            const addTodoHandler = (e) => {

                e.preventDefault()

                // Send the input value using useDispatch
                dispatch(addTodo(input))
                setInput('')
            } 

        return()
    }


-> `In Todo.jsx`

    
    import { useSelector, useDispatch } from 'react-redux'
    import {removeTodo} from '../features/todo/todoSlice'

    function Todos() {
        const todos = useSelector(state => state.todos)
        const dispatch = useDispatch()
        return (
        <>
        <div>Todos</div>
        
            {todos.map( (eachTodo) => (
                <li key={eachTodo.id}>
                    
                    {eachTodo.text}
                    
                    <button
                    onClick={() => dispatch(removeTodo(eachTodo.id))}
                    > X </button>

                </li>             
            ))}
        </>
    )}

    export default Todos

# Provider Initialization

+ Now we need to wrap all the componenets inside a provider to make sure all the componenets have access to the store.

+ We will directly add this inside main.jsx

-> `Inside main.jsx`

    import { Provider } from 'react-redux'
    import { store } from './app/store.js'

    createRoot(document.getElementById('root')).render(

        <Provider store={store}>

            <App />
            
        </Provider>,

    )


