import React, { useState } from 'react';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Todo({ todo, id,  deleteTodo}) {

    const [ newTodo, setNewTodo ] = useState({id: id, task: ''});

    
    
    return (
        <div style={{margin: '10px'}}>
            <ListItem button >
                <Typography>{todo}</Typography>    
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                        <EditIcon />
                    </IconButton>
                    <IconButton  edge='end' aria-label="delete" onClick={()=>{             
                deleteTodo(id)}} >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>    
                                  
            </ListItem>
            <Divider />
        </div>
        
    )
}

export default Todo;
