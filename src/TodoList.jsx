import { createElement } from "react";
import { useState } from "react";

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // ajouter un élément à la liste
    const addTodo = (event) => {
        event.preventDefault(); 
        if (inputValue.trim() !== "") {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h1>My Todo App</h1>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    id="todo"
                    name="todo"
                    placeholder="Type a new todo"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <br />
                <button type="submit">Add Todo</button>
            </form>
            <h2>Todos</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}><input type="checkbox" />{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;