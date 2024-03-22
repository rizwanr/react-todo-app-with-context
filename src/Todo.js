import React,{useContext,memo} from 'react'
import {   ListItem, ListItemText, Checkbox, IconButton,ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm'
import { DispatchContext } from './contexts/todo.context'

function Todo({ id,task,completed}) {

  const  dispatch  = useContext(DispatchContext)
  const  [ isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{height: "64px"}}>
      {isEditing ? <EditTodoForm  id={id} task={task} toggleEditForm={toggle}/>:
      <>
      <Checkbox tabIndex={-1} checked={completed} 
      onClick={() => dispatch({type:"TOGGLE", id:id})}/>
      <ListItemText style={{textDecoration: completed ? 'line-through':'none'}}>{task}</ListItemText>
      <ListItemSecondaryAction>
            <IconButton aria-label="delete" onClick={() => dispatch({ type: "REMOVE", id: id })} >
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

export default memo(Todo)