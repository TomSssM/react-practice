import React, { useEffect } from 'react';
import './ToDoItem.css';

// todo: read the doc

function ToDoItem ({ title, completed }) {
    // const mockToDo = {userId: 1, id: 1, title: "delectus aut autem", completed: false};

    // ***
    useEffect(() => { // 1st - any change of props
        console.log('useEffect!', title);
    });

    useEffect(() => { // 2nd - only on 1st render
        console.log('first render!');
    }, []);

    useEffect(() => { // mixed ( only on change of props.name + last render )
        return () => {
            console.log('Last Render!', title);
        };
    }, [title]);
    // ***

    return (
        <li className={completed ? 'complete' : 'todo'}>Todo: {title}</li>
    );
}

export default ToDoItem;
