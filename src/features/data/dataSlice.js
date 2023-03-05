import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../api/firebase';

const initialState = {
  user: null,
  allUsers: [],
  group: null,
  groups: [],
  globalNews: [],
  groupNews: [],
  error: null,
  loading: true,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dataStart: (state) => {
      state.loading = true;
      state.error = null;
    }, 
    dataFailure: (state) => {
      state.loading = false;
    },
    getUser: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    getAllUsers: (state, action) => {
      state.loading = false;
      state.allUsers = action.payload;
      state.error = null;
    },
    getGroup: (state, action) => {
      state.loading = false;
      state.group = action.payload;
      state.error = null;
    },
    getAllGroups: (state, action) => {
      state.loading = false;
      state.groups = action.payload;
      state.error = null;
    },
    getGlobalNews: (state, action) => {
      state.loading = false;
      state.globalNews = action.payload;
      state.error = null;
    },
    getGroupNews: (state, action) => {
      state.loading = false;
      state.groupNews = action.payload;
      state.error = null;
    },
    setNews: (state, action) => {
      state.loading = false;
      state.news = action.payload;
      state.error = null;
    }
  },
});

export const { dataStart, dataFailure,getUser,getAllUsers,getGroup,getAllGroups,getGlobalNews,getGroupNews,setNews } =
  dataSlice.actions;

export default dataSlice.reducer;
