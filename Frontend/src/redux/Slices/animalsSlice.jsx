import { createSlice } from '@reduxjs/toolkit';

const animalsSlice = createSlice({
  // Define slice name and initial state here
  name: 'animals',
  initialState: {
    list: [],
    error: false,
  },
  reducers: {
    // Define reducers for animals slice here
    setAnimals: (state, action) => {
      state.list = action.payload;
    },
    // Define reducers for error slice here
    setError: (state, action) => {
      state.error = action.payload;
    },
    deleteAnimals:(state, action)=>{
      state.list= state.list.filter(list => list.name !== action.payload);
    }
  },
});

export const { setAnimals, setError, deleteAnimals } = animalsSlice.actions;
export default animalsSlice.reducer;
