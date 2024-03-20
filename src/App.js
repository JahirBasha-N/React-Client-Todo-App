import "./App.css";
import { Fragment } from "react";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo></InputTodo>
        <ListTodo></ListTodo>
      </div>
    </Fragment>
  );
}

export default App;
