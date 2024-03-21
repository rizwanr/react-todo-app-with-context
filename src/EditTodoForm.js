import React,{useContext} from 'react'
import useInputState  from './hooks/useInputState'
import {  TextField } from '@mui/material';
import { TodosContext } from './contexts/todo.context'

function EditTodoForm({ id, task, toggleEditForm}){
  const { dispatch } = useContext(TodosContext)
  const [value,handleChange,reset] = useInputState(task)
return(
  <form onSubmit ={(e)=>{
  e.preventDefault();
    dispatch({ type: "EDIT", id: id, newTask: value })
    reset();
    toggleEditForm()
    
  }}
  style={{marginLeft: "1rem", width:"50%"}}
  >
    <TextField margin="normal" value={value} onChange={handleChange} fullWidth variant="standard"
    autoFocus />
</form>
)

}

export default EditTodoForm