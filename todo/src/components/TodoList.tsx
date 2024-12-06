import React, { useReducer, useEffect, useState } from "react";
import { Todo } from "../types/types";
import { todoReducer } from "../reducers/todoReducer";

const ToDoList = () => {
    const [state, dispatch] = useReducer(todoReducer, [], () => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });

    const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state));
    }, [state]);

    const addTodo = (text: string) => {
        dispatch({ type: "ADD", text });
    };

    const filteredTodos = state.filter(todo => {
        if (filter === "completed") return todo.completed;
        if (filter === "incomplete") return !todo.completed;
        return true;
    });

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                placeholder="Add a new task"
                onKeyDown={(e) => {
                    if (e.key === "Enter" && e.currentTarget.value) {
                        addTodo(e.currentTarget.value);
                        e.currentTarget.value = "";
                    }
                }}
            />
            <select onChange={(e) => setFilter(e.target.value as "all" | "completed" | "incomplete")}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch({ type: "TOGGLE", id: todo.id })}
                        />
                        {todo.text}
                        <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
