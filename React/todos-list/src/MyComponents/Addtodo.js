import React from 'react'
import { useState } from "react";

const Addtodo = props => {
    const[title,setTitle]=useState("")
    const[description,setDesc]=useState("")
    const submit=((e)=>
    {
        e.preventDefault()
        if(!title || !description)
        alert("Title and Description cannot be empty")
        else
        props.additem(title,description)
        setTitle("")
        setDesc("")
    }
    )
    return (
        <>
            <div className='container mt-3'>
            <h4>Add Todo</h4>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="title" value={title} onChange={(e)=> setTitle(e.target.value)} className="form-control"  placeholder="Enter Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="description"  value={description} onChange={(e)=> setDesc(e.target.value)} className="form-control" placeholder="Enter Description"/>
                </div>
                <button type="submit" className="btn btn-success py-1">Add</button>
            </form>
            </div>
        </>
    )
}


export default Addtodo