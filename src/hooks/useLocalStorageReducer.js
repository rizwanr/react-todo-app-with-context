import { useReducer, useEffect } from 'react';

function UseLocalStorageStateReducer(key, defaultVal,reducer) {

  const [state, dispatch] = useReducer(reducer, defaultVal,()=>{
    let val
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
    } catch (e) {
      val = defaultVal
    }
    return val;
  });
  //use UseEffect() to update localstorage when state changes
  useEffect(() => {
    //  alert("In use effect")
    //view from console -> localStorage.getItem("todos")
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, dispatch]
}

export default UseLocalStorageStateReducer