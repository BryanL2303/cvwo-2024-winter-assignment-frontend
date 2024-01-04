import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import Button from './Button';
import CommentCreationForm from './CommentCreationForm';
import CommentContainer from './CommentContainer'
import CommentEditor from './CommentEditor';

type CommentProp = {
    id: string,
    comment: string,
    date: string,
    parent_comment_id: string,
    post_id: string,
    user_id: string,
    author: string,
    hasChild: boolean,
}

function Comment({ id, comment, date, parent_comment_id, post_id, user_id, author }: CommentProp) {
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'username']);
    const [hasChild, setHasChild] = useState<{[key:string]: boolean}>({});
    const loggedIn = (cookies.token != null);

    function deleteComment() {
        axios.post('/delete_comment', {
            id: id,
            token: cookies.token,
        })
        .then(resp => {
            if (resp.data.status === 0) {
                alert("Comment deleted!")
                window.location.href = '/'
            } else {
                alert("Error, please try relogging in before trying again.")
            }
        })
        .catch(resp => console.log(resp))
    }

    return (<div id="1" className="w-128 h-auto border-l border-gray-500 flex justify-between">
        <div className="h-auto flex-col justify-between">
            <div className="h-10 flex overflow-y-hidden justify-between">
                <label>{comment}</label>
            </div>
            <div className="h-10 flex justify-between">
                <p>{date} -{author}</p>
                {cookies.username == author && <CommentEditor id={id} comment={comment}/>}
                {cookies.username == author && <Button onClick={deleteComment}>Delete Comment</Button>}
            </div>
            {loggedIn && <CommentCreationForm variant="comment" id={id}/>}
            {hasChild && <CommentContainer variant="comment" id={id}/>}
        </div>
    </div>)
}

export default Comment;