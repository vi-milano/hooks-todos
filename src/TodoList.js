import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm';
import { Paper } from '@material-ui/core';
import List from '@material-ui/core/List';

const dummyData = [
    {  
        id: '1',
        task: 'kill dog'
    },
    {  
        id: '2',
        task: 'lick feet'
    },
    {  
        id: '3',
        task: 'spin around'
    }
    ]
function TodoList() {

    let [ todos, setTodos ] = useState(dummyData);
    
    const editTodo = (id, newTask) =>{
        const newTodos = todos.map(t=>{
            let todo = t;
            if(todo.id === id){
                todo.task = newTask
            }            
            return todo;
        });
        setTodos(newTodos);
    }

    const deleteTodo = (id) =>{
        const newTodos = todos.filter(t=>{            
           
            return t.id !== id;
        });
        setTodos(newTodos);
    }

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }
    
 
    
    return (
        <Paper style={{height:'fit-content'}}>
            <List>{todos.map(t=>{
              return <Todo todo={t.task} id={t.id} deleteTodo={deleteTodo}/>  
            })}</List>
           
            <TodoForm addTodo={addTodo}/>
            
        </Paper>
    )
}

export default TodoList
