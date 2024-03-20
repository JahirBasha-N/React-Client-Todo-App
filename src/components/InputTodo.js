import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const onsubmit = async () => {
    try {
      const body = { description };
      const response = await fetch("http://localhost:8081/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="text-center mT-5">Todo App</div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(value) => setDescription(value.target.value)}
        ></input>
        <button
          className="btn btn-outline-secondary"
          onClick={() => onsubmit()}
        >
          Save
        </button>
      </div>
    </Fragment>
  );
};

export default InputTodo;
