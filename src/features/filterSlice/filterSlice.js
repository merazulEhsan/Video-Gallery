import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tags: [],
    search: "",
    author: "",
    pageNumber: 0
};

const filterSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        tagsSelected: (state, action) => {
            state.tags.push(action.payload);
        },

        tagsRemove: (state, action) => {
            const indexOf = state.tags.indexOf(action.payload);
            if (indexOf !== -1) {
                state.tags.splice(indexOf, 1);
            }
        },
        searched: (state, action) => {
            state.search = action.payload;
        },

        reset: (state, action) => {
            state.tags = [];
            state.search = "";
            state.author = "";
        },

        author: (state, action) => {
            state.author = action.payload;
        },
        page: (state, action) => {
            state.pageNumber = action.payload;
        }
    }
});

export default filterSlice.reducer;
export const {
    tagsSelected,
    tagsRemove,
    searched,
    reset,
    author,
    page
} = filterSlice.actions;
