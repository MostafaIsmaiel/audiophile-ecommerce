import { createSlice } from "@reduxjs/toolkit";

let id = 1;

const NotificationSlice = createSlice({
  name: "notification",
  initialState: [],
  reducers: {
    addNotification: (state, action) => {
      const message = action.payload;
      state.unshift({ message, id: id++ });
    },
    removeNotification: (state, action) => {
      return state.filter((notification) => notification.id !== action.payload);
    },
  },
});

export const { addNotification, removeNotification } =
  NotificationSlice.actions;

export default NotificationSlice.reducer;
