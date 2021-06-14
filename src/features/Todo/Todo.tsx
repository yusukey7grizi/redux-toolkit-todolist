import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./todo.css";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./Todo.Slice";
type Props = {
  EachTask: { id: number; text: string };
};
const Todo: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="todowrapper">
      <div>{props.EachTask.text}</div>
      <button
        onClick={() => dispatch(deleteTodo(props.EachTask))}
        className="button"
      >
        <DeleteIcon className="icon" />
      </button>
    </div>
  );
};

export default Todo;
