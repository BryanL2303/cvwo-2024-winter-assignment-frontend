import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type post = { 
    id: string, 
    title: string, 
    description: string, 
    date: string, 
    author: string, 
    created_at: string, 
    updated_at: string, 
    user_id: string, 
    label_id: string 
}

interface PostState{
    posts: post[];
}

const initialState: PostState = {
    posts: [],
}

export const PostSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<{posts: post[]}>) => {
            state.posts = action.payload.posts;
        },
    },
});

export default PostSlice.reducer;
export const { setPosts } = PostSlice.actions;