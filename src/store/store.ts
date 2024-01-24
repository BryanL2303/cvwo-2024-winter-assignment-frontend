import { SearchSlice } from "./features/searchSlice";
import { CategorySlice } from "./features/categorySlice";
import { PostSlice } from "./features/postSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store=configureStore({
    reducer:{
        search:SearchSlice.reducer,
        category:CategorySlice.reducer,
        post:PostSlice.reducer,
    }
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;