import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTask } from '../Redux/actions';
import {Button} from 'react-bootstrap'


const FormTodo = () => {

     const [newTask, setNewTask]=useState('')
     const handleChange=(e)=>{
          setNewTask(e.target.value)
     }
      const dispatch = useDispatch()
    const handleSubmit=(e)=>{ 
        e.preventDefault()
        dispatch(addTask({
            description : newTask
        }))
        setNewTask('')

    }     
    return (
        <form className ="form">
            <input
            type="text"
            placeholder='Entre a Todo ..'
            className='input-add'
            required
            onChange={handleChange} 
            value={newTask}

            />
        
            <Button variant="success" type='submit' className='btn-add' style={{marginLeft:"2rem"}} onClick={handleSubmit}> 
             Add
            </Button>
        </form>
        
    );
};

export default FormTodo
