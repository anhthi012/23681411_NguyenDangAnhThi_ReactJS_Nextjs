import React, { useState, useCallback } from "react";

const TodoItem = React.memo(({ todo, onDelete }) => {
    console.log("render item", todo.id);

    return (
        <li>
            {todo.text}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    );
});

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    const addTodo = () => {
        setTodos([...todos, { id: Date.now(), text }]);
    };

    const deleteTodo = useCallback((id) => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <div>
            <input onChange={(e) => setText(e.target.value)} />
            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map((t) => (
                    <TodoItem key={t.id} todo={t} onDelete={deleteTodo} />
                ))}
            </ul>
        </div>
    );
}