import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { ArrowLeft } from 'lucide-react';

import Button from './Button';

function assertIsFormFieldElement(element: Element): asserts element is HTMLInputElement | HTMLSelectElement | HTMLButtonElement {
    // Customize this list as necessary −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    if (!("value" in element)) {
        throw new Error(`Element is not a form field element`);
    }
}

type CommentEditorProp = {
    id: string,
    comment: string,
}

function CommentEditor({ id, comment }: CommentEditorProp) {
    const [cookies] = useCookies(['token']);
    const [showForm, setShowForm] = useState(false);
    
    function editComment(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        //Element 0 is the button to go back
        const comment = e.currentTarget[1];
        assertIsFormFieldElement(comment);

        const payload = {
            id: id,
            token: cookies.token,
            updates: comment.value,
        }

        axios.post('/update_comment', payload)
        .then(resp => {
            if (resp.data.status === 0) {
                alert("Comment saved!")
                window.location.href = "/post/" + resp.data.post.id
            } else if (resp.data.status === 1) {
                alert("Please relog in before trying again.")
            } else {
                if (resp.data.error.comment.length > 0) {
                    alert("Comment " + resp.data.error.comment)
                } else {
                    alert("An unexpected error has occured, please refresh the page and try again")
                }
            }
        })
        .catch(resp => console.log(resp))
    }

    return (<div>
        <div>
            <br/>
            {!showForm && <Button onClick={() => {setShowForm(true)}}>Edit Comment</Button>}
        </div>
        {showForm && <form className="z-40 h-full w-full absolute top-0 left-0 bg-gray-100 mx-20" onSubmit={editComment}>
            
            <h1 className="font-bold"><Button type="button" onClick={() => {setShowForm(false)}}><ArrowLeft/></Button> Editing Post</h1>
            <br/>
            <br/>
            <label className="w-auto">Comment: </label>
            <br/>
            <textarea className="border border-slate-400 w-3/4 h-40 p-1" style={{resize: "none"}} defaultValue={comment}></textarea>
            {false && <input type='text' className="border border-slate-400" />}
            <br/>
            <Button className="self-end" style={{transform: `translateX(65vw)`}}>Save Edit</Button>
        </form>}
    </div>)
}

export default CommentEditor;