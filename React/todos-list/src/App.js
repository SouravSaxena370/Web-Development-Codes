// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import Addtodo from './MyComponents/Addtodo'
import NoPage from './MyComponents/NoPage'
import About from './MyComponents/About'
import { useState,useEffect } from "react";
import {Routes, Route } from "react-router-dom";


function App() {
  // localStorage.setItem("todos",JSON.stringify([{sno:1,title:"first",desc:"firstdesc"},{sno:2,title:"second",desc:"seconddesc"}]))
  function onDelete(todo)
  {
    // console.log("ondelete for",todo)
    setTodos(todos.filter((e)=>
      {
        return e!==todo
      }
    ))
  }
  const additem=((title,description)=>
  {
    let num
    if(todos.length===0)
    num=0
    else
    num=todos[todos.length-1].sno
    num++
    const item={
      sno:num,
      title: title,
      desc: description
    }
    setTodos([...todos,item])
    localStorage.setItem("todos",JSON.stringify(todos))
  })
  let todoitem=localStorage.getItem('todos');
  if(todoitem===null)
  todoitem=[]
  else
  todoitem=JSON.parse(todoitem)
  const[todos,setTodos]=useState(todoitem)
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <>
      <Header title={"My Todos List"} Searchbar={true}/>
      <Routes>
        <Route path='/' element={<><Addtodo additem={additem}/><Todos todos={todos} onDelete={onDelete}/></>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;