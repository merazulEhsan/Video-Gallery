import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosApi";

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: false,
};

export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ tags, id }) => {
    const relatedVideos = await getRelatedVideos({ tags, id });
    return relatedVideos;
  }
);

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.relatedVideos = [];
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
