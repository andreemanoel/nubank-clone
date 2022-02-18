import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export interface NotificationState {
  loading: boolean;
  qtd: number;
}

const initialState: NotificationState = {
  loading: false,
  qtd: 0,
};

const notifications = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setQtd(state, {payload}: PayloadAction<number>) {
      state.qtd = payload;
    },
  },
});

export const {setQtd} = notifications.actions;

export default notifications.reducer;
