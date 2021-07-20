import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "./Todo.Slice";
import { Button, Grid, IconButton } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import EditIcon from "@material-ui/icons/Edit";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "5px",
  },
  root: {
    width: "50%",
    backgroundColor: "white",
    display: "flex",
    margin: "auto",
    borderRadius: "5px",
    padding: "5px",
  },
  title: {
    fontSize: "20px",
    margin: "auto",
    fontFamily: "'Noto Sans JP', sans-serif",
  },
  buttonWrapper: {},
  paper: {
    borderRadius: "10px",
    backgroundColor: "white",
    width: "400px",
    height: "200px",
    marginLeft: "50%",
    marginRight: "50%",
    marginTop: "300px",
  },
  editContent: {
    display: "flex",
    flexDirection: "column",
    padding: "2px",
    margin: "auto",
  },
}));
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
type Props = {
  EachTask: { id: number; text: string };
};
const Todo: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [InputText, setInputText] = React.useState(props.EachTask.text);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInputText(props.EachTask.text);
  };
  const SubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(editTodo({ id: props.EachTask.id, text: InputText }));
    setOpen(false);
    setInputText(props.EachTask.text);
  };

  const DeleteHandler = () => {
    const r = window.confirm(
      `Are you sure you want to delete "${props.EachTask.text}"? `
    );
    if (r == true) {
      dispatch(deleteTodo(props.EachTask));
    } else {
      return false;
    }
  };
  const body = (
    <Grid style={modalStyle} className={classes.paper}>
      {" "}
      <form className={classes.editContent} onSubmit={SubmitHandler}>
        <Grid>
          {" "}
          <TextField
            style={{ marginTop: "50px" }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputText(e.target.value);
            }}
            id="outlined-basic"
            defaultValue={props.EachTask.text}
            variant="outlined"
            value={InputText}
            required={true}
            inputProps={{ maxLength: 25 }}
          />
        </Grid>
        <Grid style={{ marginTop: "10px" }}>
          {" "}
          <Button type="submit" variant="outlined" color="secondary">
            Submit
          </Button>
        </Grid>
      </form>
    </Grid>
  );
  return (
    <Grid className={classes.wrapper}>
      <Grid className={classes.root}>
        {" "}
        <Grid className={classes.title}>{props.EachTask.text}</Grid>
        <Grid className={classes.buttonWrapper}>
          {" "}
          <IconButton onClick={DeleteHandler}>
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setOpen(true);
            }}
          >
            <EditIcon />
          </IconButton>
        </Grid>
      </Grid>{" "}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Grid>
  );
};

export default Todo;
