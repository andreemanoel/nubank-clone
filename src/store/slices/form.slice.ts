import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Client} from '../../interface/Client';

export interface ClientState {
  loading: boolean;
  client: Client;
}

const initialState: ClientState = {
  loading: false,
  client: {} as Client,
};

const clients = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    setClient(state, {payload}: PayloadAction<Client>) {
      state.client.client_nome = payload.client_nome;
      state.client.client_valor = payload.client_valor;
    },
  },
});

export const {setClient} = clients.actions;

export default clients.reducer;
