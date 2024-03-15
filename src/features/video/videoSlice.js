import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVideo, patchVideoLike, patchVideoUnlike } from "./videoApi";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: false,
};

export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const video = await getVideo(id);
  return video;
});

export const likeUpdateVideo = createAsyncThunk(
  "video/likeunlikeupdatevideo",
  async ({ id, like }) => {
    const video = await patchVideoLike({ id, like });
    return video;
  }
);

export const UnlikelikeUpdateVideo = createAsyncThunk(
  "video/likeunlikeupdatevideo",
  async ({ id, unlike }) => {
    const video = await patchVideoUnlike({ id, unlike });
    return video;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.video = {};
        state.error = action.error?.message;
      })
      .addCase(likeUpdateVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(likeUpdateVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(likeUpdateVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
