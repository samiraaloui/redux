import React from 'react'
import {useDispatch} from 'react-redux'
import { Button } from 'react-bootstrap'
import {completeTask,deleteTask} from '../Redux/actions'
import EditeTask from './EditeTask'
const Task = ({taskData, index}) => {

    const dispatch = useDispatch()
    const handleComplete=()=>{
        dispatch(completeTask({
            id:taskData.id
        }))
    }
    const handleDelete=()=>{
        dispatch(deleteTask(
            {id:taskData.id}
        ))
    }
    return (
        <div>
            <div className="todo-Field">
                <div>
                    <h2 style={{textDecoration:taskData.isDone?'line-through' : 'none'}}
                    >{`${index + 1}/- ${taskData.description}`}</h2> 
                </div>
            <div className='inputt-Field'>
            <Button variant="warning" className="btn" style={{marginLeft:"2rem"}}onClick={handleComplete}>
                {taskData.isDone? 'Undone' :"Done"}
                </Button>

             <Button variant="dark" className="btn" style={{marginLeft:"2rem"}}onClick={handleDelete} >Delete</Button>
             <EditeTask taskData={taskData}/>   
            </div>
            </div>
        </div>
        
    )
}

export default Task
