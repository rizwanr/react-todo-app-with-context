import React from 'react'
import {   ListItem, ListItemText, Checkbox, IconButton,ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm'

function Todo({ task, id, completed, removeTodo, toggleTodo, editTodo}) {
  const  [ isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{height: "64px"}}>
      {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle}/>:
      <>
      <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
      <ListItemText style={{textDecoration: completed ? 'line-through':'none'}}>{task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
          <DeleteIcon />

        </IconButton>
        <IconButton aria-label="edit" onClick={()=>toggle(id)} >
          <EditIcon />

        </IconButton>
      </ListItemSecondaryAction>
      </>
      }
    </ListItem>
  );
}

export default Todo