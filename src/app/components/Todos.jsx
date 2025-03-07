import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.TodosArray);
  const dispatch = useDispatch();

  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <li
          className="flex justify-between items-center bg-gray-800 px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          key={todo.id}
        >
          <span className="text-white">{todo.text}</span>

          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className=" text-white p-2 rounded-md hover:bg-slate-700 transition"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
