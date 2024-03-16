import { Paper,List,ListItem,Divider,ListItemText} from '@mui/material';
import React from 'react';
import Todo from './Todo'

function TodoList({ todos, removeTodo, toggleTodo, editTodo}) {
  if (todos.length) {
  return(
  <Paper>
  <List>

   {todos.map((todo, i)=>(
     <>
          <Todo 
          key={todo.id} 
          task={todo.task} 
          id={todo.id}  
          completed={todo.completed} 
          removeTodo={removeTodo} 
          toggleTodo={toggleTodo}  
          editTodo={editTodo}
          />
       { i< todo.length-1 && <Divider/>}
        </>
   ))}
   </List>
  </Paper>
);

}else{
 return null
} }
export default TodoList