//todos
//all methods to interact with todos

import React,{createContext,useReducer} from "react"
import todoReducer from '../reducers/todo.reducers.js'


const defaultTodos=[
  {id:1, task:"Mow the lawn", completed:false},
  {id:2, task:"Release lady bugs", completed:true}
]

export const TodosContext= createContext();

export function TodosProvider(props){
  //const todoStuff = useTodoState(defaultTodos)
  const [todos,dispatch] = useReducer(todoReducer, defaultTodos)
  return(
    <TodosContext.Provider value={{todos, dispatch}}>
    {props.children}
    </TodosContext.Provider>
  )
}
