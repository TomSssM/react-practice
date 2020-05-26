import React, { useState, useEffect } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList () {
    const [todoList, setToDoList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // const mockToDo = {userId: 1, id: 1, title: "delectus aut autem", completed: false};
    const fetchData = () => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                if (!res.ok) {
                    setError('HTTP Error');
                }
                return res.json();
            })
            .then((data) => {
                setError(null);
                setToDoList(data);
            }).catch(() => {
                setError('Fetch Error');
            }).finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(fetchData, []); // load on component render

    return (
        <>
            <button
                disabled={isLoading}
                onClick={fetchData}
            >
                {isLoading ? 'Loading...' : 'Fetch Data'}
            </button>
            {
                error
                    ? <div>Error: {error}</div>
                    : (
                        <ul>
                            {todoList.map(({ completed, title }, index) => {
                                return (
                                    <ToDoItem
                                        key={index}
                                        completed={completed}
                                        title={title}
                                    />
                                );
                            })}
                        </ul>
                    )
            }
        </>
    );
}

export default ToDoList;
