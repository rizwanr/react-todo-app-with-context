import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import React from 'react';
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { TodosProvider} from './contexts/todo.context'





function TodoApp() {

  /*In JavaScript, null is considered falsy. Since the left side expression evaluates to falsy, the logical OR operator moves to the right side and evaluates "[]". An empty string ("") is considered truthy in JavaScript, so the logical OR operator returns "[]"
  */
 
  // const initialTodos=[
  //   {id:1, task:'Clean Fishtank',completed:false},
  //   {id:2, task:'Wash Car', completed:true},
  //   {id:3, task: 'Grow Beard', completed:false}
  // ]

  //removing it because we have moved all this to Context
  //const { todos, addTodo, removeTodo, toggleTodo, editTodo}= useTodoState(initialTodos)

  /*
  setTodos([...todos, {id: 4, task: newTodoText, completed:false}]): Finally, this part sets your todo list to be the copy of the current todos (spread using ...todos) with the new todo item added to the end.
In simpler terms, it's like saying: "Take all the current todo items I have, and add a new one to the end of the list."
 */



  return (
    <Paper style={{
      padding:0,
      margin:0,
      height: "100vh",
      backgroundColor:"#fafafas",
    }}
    elevation={0}
    >
    <AppBar color='primary' position='static' style={{height:"64px"}}>
    <Toolbar>
      <Typography color='inherit'>Todos with hooks</Typography>
    </Toolbar>
    </AppBar>
      <Grid container justifyContent='center' style={{ marginTop: "1rem" }}>
    <Grid item xs={11} md={8} lg={4}>
    <TodosProvider>
      <TodoForm />
          <TodoList/>
      </TodosProvider>
    </Grid>
    </Grid>
    
    </Paper>
  )
}

export default TodoApp