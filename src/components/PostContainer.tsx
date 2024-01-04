import { ComponentProps, useContext, useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';

import  { SelectedCategoryContext } from '../context/SelectedCategoryContext'
import  { PostsContext } from '../context/PostsContext'
import  { SearchContext } from '../context/SearchContext'
import Post from './Post';
import PostCreationForm from './PostCreationForm';

type PostContainerProps = ComponentProps<"div">

const PostProp = {
    id: "0",
    title: "Backend returned title",
    labels: ["Game", "Entertainment"],
    description: "Backend returned description",
    date: "23 December 2023",
    author: "Administrator",
    user_id: "1",
    label_id: "1",
    created_at: "",
    updated_at: ""
}

function PostContainer({ ...props }: PostContainerProps) {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const loggedIn = (cookies.token != null);
    const [selectedCategory, setSelectedCategory] = useContext(SelectedCategoryContext)
    const [posts, setPosts] = useContext(PostsContext)
    const [search, setSearch] = useContext(SearchContext)
    type post = { id: string, title: string, description: string, date: string, author: string, created_at: string, updated_at: string, user_id: string, label_id: string }
    //const [posts, setPosts] = useState<post[]>([])
    type label = { id: string, label_name: string}
    const [labels, setLabels] = useState<{[key:string]: label[]}>({})

    useEffect(() => {
        if (selectedCategory.label_name == "All") {
            axios.post('/get_posts')
            .then(resp => {
                if (resp.data.status === 0) {
                    setPosts(resp.data.posts)
                    setLabels(resp.data.labels)
                }
            })
            .catch(resp => console.log(resp))
        } else {
            axios.post('/get_posts_by_labels', {id: selectedCategory.id})
            .then(resp => {
                if (resp.data.status === 0) {
                    setPosts(resp.data.posts)
                    setLabels(resp.data.labels)
                    console.log(resp.data)
                }
            })
            .catch(resp => console.log(resp))
        }
    }, [selectedCategory])

    return <div {...props} className="w-128 m-5 space-y-1 overflow-hidden flex-col">
        {loggedIn && <PostCreationForm />}
        {Array.isArray(posts) && posts.map((post: post) => {
            console.log(post)
            return <Post id={post.id} key={post.id} title={post.title} labels={labels[post.id]} description={post.description} date={post.date} author={post.author} search={search} />
        })}
    </div>
}

export default PostContainer;