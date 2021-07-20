import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface CounterState {
  IdCounter: number;
  Tasks: { id: number; text: string }[];
}
const initialState: CounterState = {
  IdCounter: 0,
  Tasks: [],
};

export const TodoSlice = createSlice({
  name: "TodoList",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.IdCounter++;
      const newTodo = {
        id: state.IdCounter,
        text: action.payload,
      };
      state.Tasks = [...state.Tasks, newTodo];
    },
    editTodo: (state, action) => {
      const SelectedTodo = state.Tasks.find(
        (task) => task.id === action.payload.id
      );
      if (SelectedTodo) {
        SelectedTodo.text = action.payload.text;
      }
    },
    deleteTodo: (state, action) => {
      state.Tasks = state.Tasks.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = TodoSlice.actions;

export const selectTodo = (state: RootState) => state.task;

export default TodoSlice.reducer;
