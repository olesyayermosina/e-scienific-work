import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { uploadOntology } from '../../api/ontology.js';

const initialState = {
  loading: false,
  data: '',
  error: '',
};

export const mergeOntologies = createAsyncThunk(
  'merging/merge',
  async (formData) => {
    const response = await uploadOntology(formData);
    return response.data.data;
  },
);

export const mergingSlice = createSlice({
  name: 'merging',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(mergeOntologies.pending, (state) => {
      state.loading = true;
      state.data = {};
      state.error = '';
    });

    builder.addCase(mergeOntologies.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });

    builder.addCase(mergeOntologies.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message ? action.error.message : 'error';
    });
  },
});
