import { useState,useEffect } from 'react';

function UseLocalStorageState(key,defaultVal){
  //make piece of state based off of the value in localstorage
const [state,setState]=useState(()=>{
  let val
  try{
    val=JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
  }catch(e){
    val=defaultVal
  }
  return val;
}); 

  //use UseEffect() to update localstorage when state changes
  useEffect(() => {
    //  alert("In use effect")
    //view from console -> localStorage.getItem("todos")
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])
  return [state,setState]
}

export default UseLocalStorageState