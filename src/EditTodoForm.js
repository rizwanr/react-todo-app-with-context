import React from 'react'
import useInputState  from './hooks/useInputState'
import {  TextField } from '@mui/material';

function EditTodoForm({editTodo, id, task, toggleEditForm}){
  const [value,handleChange,reset] = useInputState(task)
return(
  <form onSubmit ={(e)=>{
  e.preventDefault();
    editTodo(id,value);
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