import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type category = {id: string, label_name: string}

interface CategoryState{
    categoriesList: category[];
    selectedCategory: category;
}

const initialState: CategoryState = {
    categoriesList: [],
    selectedCategory: {id: '0',
        label_name: "All"},
}

export const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<{categories: category[]}>) => {
            state.categoriesList = action.payload.categories;
        },
        setSelectedCategory: (state, action: PayloadAction<{category: category}>) => {
            state.selectedCategory = action.payload.category;
        },
    },
});

export default CategorySlice.reducer;
export const { setCategories, setSelectedCategory } = CategorySlice.actions;