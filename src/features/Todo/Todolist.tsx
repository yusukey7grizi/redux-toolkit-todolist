import React from "react";
import { useSelector } from "react-redux";
import "./todolist.css";
import Todo from "./Todo";
import { selectTodo } from "./Todo.Slice";
const Todolist: React.FC = () => {
  const TodoSelector = useSelector(selectTodo);
  return (
    <div className="wrapper">
      <div>
        {TodoSelector.Tasks.map((task) => (
          <Todo key={task.id} EachTask={task} />
        ))}
      </div>
    </div>
  );
};

export default Todolist;
