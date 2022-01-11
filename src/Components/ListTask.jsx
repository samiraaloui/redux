import React from 'react'
import Task from './Task' 

import { useSelector } from 'react-redux';

const ListTask = () => {
    const tasks = useSelector((state) => state.tasksReducer.tasks)

    return (
        <div>
            { 
            tasks.map ((taskData, index) =><Task taskData={taskData}  key={index} index={index}/> )
            }
        </div>
    );
};

export default ListTask
