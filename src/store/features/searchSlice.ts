import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState{
    searchTerm: string;
}

const initialState: SearchState = {
    searchTerm: "",
}

export const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<{searchTerm: string}>) => {
            state.searchTerm = action.payload.searchTerm;
        },
    },
});

export default SearchSlice.reducer;
export const { setSearchTerm } = SearchSlice.actions;