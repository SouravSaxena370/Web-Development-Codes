import React from 'react'

const todoitem = props => {
  return (
    <>
        <h5>{props.todo.title}</h5>
        <p>{props.todo.desc}</p>
        <button className='btn btn-sm btn-danger' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
        <hr />
    </>
    
  )
}

export default todoitem