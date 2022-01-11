import React from 'react'
import "./App.css"
import Header from './Components/Header'
import FormTodo from './Components/FormTodo'
import ListTask from './Components/ListTask'
const App = () => {
    return (
        <div className="App">
           <div className="container">
               <Header/>
                <FormTodo/>
                <ListTask/>
            </div> 
        </div>
    )
}

export default App
