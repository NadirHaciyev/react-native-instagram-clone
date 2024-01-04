import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {AppDispatch, AppThunk, RootState} from '.';
import type {User} from '@/components/common/types';
import Axios from '@/libs/axios';

type LoginDataType = {
  email: string;
  password: string;
};

type RegisterDataType = {
  full_name: string;
  user_name: string;
  email: string;
  password: string;
};

export interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  loading: string;
}

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
  loading: 'idle',
};

export const login = createAsyncThunk(
  'users/login',
  async (data: LoginDataType) => {
    const {data: user} = await Axios.post<User>('/users/login', data);
    return user;
  },
);

export const register = createAsyncThunk(
  'users/register',
  async (data: RegisterDataType) => {
    const {data: user} = await Axios.post<User>('/users', data);
    return user;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
      state.isLoggedIn = false;
    },
    update: (state, action: PayloadAction<User>) => {
      console.log('work update')
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.pending, state => {
      state.loading = 'pending';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = 'success';
    });
    builder.addCase(login.rejected, state => {
      state.loading = 'error';
    });

    builder.addCase(register.pending, state => {
      state.loading = 'pending';
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = 'success';
    });
    builder.addCase(register.rejected, state => {
      state.loading = 'error';
    });
  },
});

export const {logout, update} = userSlice.actions;

export const fetchMeAndUpdate: AppThunk = async dispatch => {
  const {data} = await Axios<User>('/users/me');
  console.log('data', data)
  dispatch(update(data));
};

export default userSlice.reducer;
