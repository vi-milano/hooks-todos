import React, {useState} from 'react'
import uuid from 'uuid/v4';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
function TodoForm({addTodo}) {

    const [value, setValue] = useState('');

    const textInput = (e) =>{
        let task = e.target.value;
        setValue(task);
    }

    const addHandler = ()=>{
        const newTodo = {
            id: uuid(),
            task: value
        }

        addTodo(newTodo);

        setValue('');
        
    }
    return (
        <div style={{margin: '20px', display: 'flex', alignItems: 'flex-end', justifyContent: 'spaceBetween'}}>            
           
            
      <FormControl >
        <InputLabel htmlFor="new-task">Task goes here...</InputLabel>
        <Input id="new-task" value={value.task} onChange={textInput}/>
      </FormControl>
      <Button variant="contained" onClick={addHandler}>
        Add Task
      </Button>
        </div>
    )
}

export default TodoForm
