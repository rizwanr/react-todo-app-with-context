import { Paper,List,Divider} from '@mui/material';
import React,{useContext} from 'react';
import Todo from './Todo'
import { TodosContext } from './contexts/todo.context'

function TodoList() {
  const {todos} = useContext(TodosContext)
  if (todos.length) {
  return(
  <Paper>
  <List>

   {todos.map((todo, i)=>(
          <React.Fragment key={todo.id}>
          <Todo 
              key={todo.id}
              task={todo.task}
              id={todo.id}
              completed={todo.completed} 
          />
       { i< todo.length-1 && <Divider/>}
          </React.Fragment>
      
   ))}
   </List>
  </Paper>
);

}else{
 return null
} }
export default TodoList