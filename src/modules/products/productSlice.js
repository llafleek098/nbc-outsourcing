import { createSlice } from '@reduxjs/toolkit';

// ? products 이외의 데이터가 필요한가?
// ? 확장성을 고려해서 작성해야 겠네...
// Thunk는 많이써봤으니... React Query 한번 써볼까...

const initialState = {
  products: []
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
});
