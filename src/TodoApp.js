import React from 'react'
import TodoList from './TodoList';



function TodoApp() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px', backgroundColor: 'lightgrey', height: '100vh'}}>
            <TodoList/>
            
        </div>
    )
}

export default TodoApp;
