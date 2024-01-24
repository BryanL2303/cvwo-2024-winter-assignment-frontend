import { ComponentProps, useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Post from './Post';
import PostCreationForm from './PostCreationForm';
import { setPosts } from "../store/features/postSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

type PostContainerProps = ComponentProps<"div">

function PostContainer({ ...props }: PostContainerProps) {
    const [cookies] = useCookies(['token']);
    const loggedIn = (cookies.token != null);
    type post = { id: string, title: string, description: string, date: string, author: string, created_at: string, updated_at: string, user_id: string, label_id: string }
    type label = { id: string, label_name: string}
    const [labels, setLabels] = useState<{[key:string]: label[]}>({})
    const [loaded, setLoaded] = useState(false)

    const searchTerm = useAppSelector((state)=> state.search.searchTerm);
    const selectedCategory = useAppSelector((state)=> state.category.selectedCategory)
    const posts = useAppSelector((state)=> state.post.posts)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (selectedCategory.label_name === "All") {
            axios.post('/get_posts')
            .then(resp => {
                if (resp.data.status === 0) {
                    dispatch(setPosts({posts: resp.data.posts}))
                    setLabels(resp.data.labels)
                    setLoaded(true)
                }
            })
            .catch(resp => console.log(resp))
        } else {
            axios.post('/get_posts_by_labels', {id: selectedCategory.id})
            .then(resp => {
                if (resp.data.status === 0) {
                    dispatch(setPosts({posts: resp.data.posts}))
                    setLabels(resp.data.labels)
                }
            })
            .catch(resp => console.log(resp))
        }
    }, [selectedCategory])

    return <div {...props} className="w-128 m-5 space-y-1 overflow-hidden flex-col">
        {loggedIn && <PostCreationForm />}
        {!loaded && <label>loading posts...</label>}
        {loaded && Array.isArray(posts) && posts.length === 0 && <label>There are currently no posts.</label>}
        {loaded && Array.isArray(posts) && posts.map((post: post) => {
            return <Post id={post.id} key={post.id} title={post.title} labels={labels[post.id]} description={post.description} date={post.date} author={post.author} search={searchTerm} />
        })}
    </div>
}

export default PostContainer;