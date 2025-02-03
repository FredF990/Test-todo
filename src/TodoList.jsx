import { createElement } from "react";
import { useState } from "react";

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // ajouter un élément à la liste
    const addTodo = (event) => {
        event.preventDefault(); 
        if (inputValue.trim() !== "") {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                done: false
            };
            setTodos([...todos, newTodo]);
            setInputValue("");
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleCheck = (id) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === id){
                todo.done = !todo.done;
            }
            return todo;
        })
        setTodos(newTodos);
    };

    const deleteTodo = () => {
        const delTodo = todos.filter(todo => !todo.done);
        setTodos(delTodo);
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
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input 
                            id={todo.id} 
                            type="checkbox"
                            checked={todo.done} 
                            onChange={() => handleCheck(todo.id)} />{todo.text}
                    </li>
                ))}
            </ul>
            <button className="delete" onClick={deleteTodo}>Delete</button>
        </div>
    );
}

export default ToDoList;