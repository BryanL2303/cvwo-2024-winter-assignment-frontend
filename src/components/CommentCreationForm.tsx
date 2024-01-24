import React, { ComponentProps, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import Button from './Button';

function assertIsFormFieldElement(element: Element): asserts element is HTMLInputElement | HTMLSelectElement | HTMLButtonElement {
    // Customize this list as necessary −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    if (!("value" in element)) {
        throw new Error(`Element is not a form field element`);
    }
}

type CommentCreationFormProps = { variant: string, id: string, post_id?:string } & ComponentProps<"div">

function CommentCreationForm({ variant, id, post_id="0" }: CommentCreationFormProps) {
    const [cookies] = useCookies(['token']);
    const [showFields, setShowFields] = useState(false);
    
    function createComment(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const comment = e.currentTarget[0];
        assertIsFormFieldElement(comment);

        const payload = {
            token: cookies.token,
            comment: comment.value,
            variant: variant,
            id: id,
            post_id: post_id,
        }

        axios.post('/post_comment', payload)
        .then(resp => {
            if (resp.data.status === 0) {
                alert("Comment posted!")
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

    return (<div className="w-11/12 mx-1 h-auto flex-col">
        <form className="h-auto w=auto" onSubmit={createComment}>
            <input type='text' className="border border-slate-400" placeholder='Add a comment' onFocus={() => setShowFields(true)}/>
            {showFields && <div>
                <Button className="self-end" style={{transform: `translateX(50vw)`}} onClick={() => setShowFields(false)}>Cancel</Button>
                <Button className="self-end" style={{transform: `translateX(50vw)`}}>Comment</Button>
            </div>}
        </form>
    </div>)
}

export default CommentCreationForm;