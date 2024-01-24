import { ComponentProps, useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';

import Comment from './Comment';
import CommentCreationForm from './CommentCreationForm';

type CommentContainerProps = {
    variant: string,
    id: string
} & ComponentProps<"div">

function CommentContainer({ variant, id, ...props }: CommentContainerProps) {
    const [cookies] = useCookies(['token']);
    const [hasChild, setHasChild] = useState<{[key:string]: boolean}>({});
    const loggedIn = (cookies.token != null);
    type comment = {
        id: string,
        comment: string,
        date: string,
        parent_comment_id: string,
        post_id: string,
        user_id: string,
        author: string,
    }
    const [comments, setComments] = useState<comment[]>([])

    useEffect(() => {
        axios.post('/get_comments', {variant: variant, id: id})
        .then(resp => {
            if (resp.data.status === 0) {
                setComments(resp.data.comments)
                setHasChild(resp.data.hasChild)
            }
        })
        .catch(resp => console.log(resp))
    }, [])

    return <div {...props} className="w-128 h-auto m-5 space-y-1 flex-col">
        {loggedIn && variant === "post" && <CommentCreationForm variant={variant} id={id} />}
        {Array.isArray(comments) && comments.map((comment: comment) => {
            return <Comment id={comment.id} 
            key={comment.id} 
            comment={comment.comment} 
            date={comment.date} 
            parent_comment_id={comment.parent_comment_id}
            post_id={comment.post_id}
            user_id={comment.user_id}
            author={comment.author} 
            hasChild={hasChild[comment.id]}/>
        })}
    </div>
}

export default CommentContainer;