import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function ToDoList() {
    const [input, setInput] = useState('');

    const [todos, setTodos] = useState(() => {
        /* Hämtar sparade todos från localStorage, eller en tom lista om inget finns */
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        /* Sparar todos i localStorage varje gång listan ändras */
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAdd = () => {
        if (input.trim() === '')
            return;
        /* Skapar en ny uppgift (ett objekt) med ett unikt id och texten från textrutan */
        const newTodo = {id: Date.now(), text: input.trim() };
        /* Skapar en ny lista: alla gamla uppgifter (...todos) + den nya */
        setTodos([...todos, newTodo]);
        /* Textrutan töms. */
        setInput('');
    }
    
    const handleDelete = (id) => {
        /* .filter behåller alla uppgifter vars id INTE är det vi klickade på – så den klickade försvinner */
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    
    return (
        <div>
            <h1>To Do List Page</h1>
            <textarea
                placeholder='What to do...?'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            <Link to="/">Go to Home</Link>
            <h2>Tasks</h2>
            <ol>
                {/* .map går igenom alla saker i listan och sedan ger dem en <li> element med en knapp */}
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {/* todo.text skriver bara ut texten i arrayen.. */}
                        {todo.text}
                        {/* Här kommer knappen som .map skapar för allt i listan */}
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ol>
            <Link to='/'>Go to Home</Link>
        </div>
        
    );
}

export default ToDoList;