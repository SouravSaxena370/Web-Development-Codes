import React from 'react'
import PropTypes from 'prop-types'
import Todoitem from './Todoitem'
let styles={
    "minHeight": "38vh"
}
const Todos = props => {
  return (
    <div className="container" style={styles}>
        <h4 className=' my-4'>Todos List</h4>
        {props.todos.length===0?<h6>There are no todos for now.</h6>:
        props.todos.map((todo,i)=>{
          return <Todoitem key={i} todo={todo} onDelete={props.onDelete}/>
        })}
    </div>
  )
}

Todos.propTypes = {}

export default Todos