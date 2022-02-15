import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Client} from '../../interface/Client';

export interface ClientState {
  loading: boolean;
  clients: Client[];
}

const initialState: ClientState = {
  loading: false,
  clients: [],
};

const clients = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    setClients(state, {payload}: PayloadAction<Client[]>) {
      state.clients = [...state.clients, ...payload];
    },
  },
});

export const {setClients} = clients.actions;

export default clients.reducer;
