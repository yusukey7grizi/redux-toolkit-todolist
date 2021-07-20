import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./Form.css";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { addTodo } from "../Todo/Todo.Slice";
const Form = () => {
  const [InputText, setInputText] = useState<string | number>("");
  const dispatch = useDispatch();
  console.log(InputText);
  const SubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(addTodo(InputText));
    setInputText("");
  };
  return (
    <form onSubmit={SubmitHandler} className="form">
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputText(e.target.value);
        }}
        inputProps={{ maxLength: 25 }}
        id="outlined-basic"
        label="Add a Task"
        variant="outlined"
        value={InputText}
        required={true}
      />
      <button type="submit" className="addbutton">
        <AddIcon className="addicon" />
      </button>
    </form>
  );
};

export default Form;
