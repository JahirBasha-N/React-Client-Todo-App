import React, { Fragment, useEffect, useState } from "react";
const ListTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const fetchList = async () => {
    let response = await fetch("http://localhost:8081/todo");
    let data = await response.json();
    console.log(response, data);
    setTodoList(data.data);
  };
  const deleteTodo = async (id) => {
    let response = await fetch(`http://localhost:8081/todo/${id}`, {
      method: "DELETE",
    });
    let data = await response.json();
    console.log(response, data);
    setTodoList(data.data);
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <Fragment>
      <div>List Todo</div>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
