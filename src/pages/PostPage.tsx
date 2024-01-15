import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';

import NavBar from '../components/NavBar';
import Button from '../components/Button';
import CommentContainer from '../components/CommentContainer'
//import PostEditor from '../components/PostEditor'

const PostEditor = lazy(() => import('../components/PostEditor'))

type postprop = {id: string, title: string, description: string, author: string, date:string, labels: string[]}

function PostPage() {
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'username']);
    const params = useParams();    
    const [post, setPost] = useState<postprop>({id: "0", title: "Fetching post", description: "", author: "", date: "", labels: []})

    useEffect(() => {
        if (params['id'] != null) {
            fetchPost(params['id']);
        } else window.location.href = '/';
    }, [params['id']])

    /**
     * Make fetch request to back end to get information of the post
     * 
     * Post to backend with:
     * id: int
     * 
     * Backend will respond with the following:
     * status:
     * 0 - success
     * 1 - id no longer exists
     * 2 - unable to interact with database
     */
    function fetchPost(id: string) {
        axios.post('/get_post', {id: id})
        .then(resp => {
            if (resp.data.status === 0) {
                setPost({...resp.data.post, labels: resp.data.labels})
            } else {
                alert("Error fetching post, going back to main page")
                window.location.href = '/'
            }
        })
        .catch(resp => console.log(resp))
    }

    function deletePost() {
        axios.post('/delete_post', {
            id: params['id'],
            token: cookies.token,
        })
        .then(resp => {
            if (resp.data.status === 0) {
                alert("Post deleted!")
                window.location.href = '/'
            } else {
                alert("Error, please try relogging in before trying again.")
            }
        })
        .catch(resp => console.log(resp))
    }

    return (<div className="top-0 left-0 h-screen w-128 mx-20 overflow-y-hidden">
        <NavBar />
        <div className="mx-10 my-10 h-3/4 flex-col bg-gray-100 bg-opacity-100 overflow-x-hidden">
            <div className="flex">
                <Button onClick={() => {
                    window.location.href = '/'
                }}>
                    <ArrowLeft />
                </Button>
                <h1 className="ml-10 font-bold">{post.title}</h1>            
            </div>
            <div className="flex-col">
                <label>{post.description}</label>
                <br/>
                <br/>
                <label>- {post.author}</label>
                {cookies.username === post.author && <Suspense fallback={<h1>Loading Form...</h1>}>
                        <PostEditor post={post}/>
                    </Suspense>}
                <br/>
                {cookies.username === post.author && <Button onClick={deletePost}>Delete Post</Button>}
                <br/>
                <br/>
            </div>
            <div>
                <h3 className="font-bold">Comments</h3>
                {params["id"] != null && <CommentContainer variant="post" id={params['id']}/>}            
            </div>
        </div>            
    </div>
    )
}

export default PostPage;