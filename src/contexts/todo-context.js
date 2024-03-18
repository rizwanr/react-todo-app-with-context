//todos
//all methods to interact with todos

import React,{createContext} from "react"
import useTodoState from '../hooks/useTodoState'

const defaultTodos=[
  {id:1, task:"Mow the lawn", completed:false},
  {id:2, task:"Release lady bugs", completed:true}
]

export const TodosContext= createContext();

export function TodosProvider(props){
  const todoStuff = useTodoState(defaultTodos)
  return(
    <TodosContext.Provider value ={todoStuff}>
    {props.children}
    </TodosContext.Provider>
  )
}
