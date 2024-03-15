import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videoSlice";
import tagsReducer from "../features/tags/tagsSlice";
import videoReducer from "../features/video/videoSlice";
import relatedVideosReducer from "../features/relatedVideos/relatedVideosSlice";
import filterReducer from "../features/filterSlice/filterSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
    tags: tagsReducer,
    relatedVideos: relatedVideosReducer,
    filters: filterReducer,
  },
});
