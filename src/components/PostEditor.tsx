import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { ArrowLeft } from 'lucide-react';

import  { CategoriesContext } from '../context/CategoriesContext'
import Button from './Button';

function assertIsFormFieldElement(element: Element): asserts element is HTMLInputElement | HTMLSelectElement | HTMLButtonElement {
    // Customize this list as necessary −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    if (!("value" in element)) {
        throw new Error(`Element is not a form field element`);
    }
}

function assertIsSelectElement(element: Element): asserts element is HTMLSelectElement {
    // Customize this list as necessary −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    if (!("value" in element)) {
        throw new Error(`Element is not a form field element`);
    }
}

type PostProp = {
    post: {
        id: string,
        title: string,
        description: string,
        author: string,
        date: string,
        labels: string[],
    },
}

function PostEditor({ post }: PostProp) {
    const [cookies] = useCookies(['token']);
    const [categories] = useContext(CategoriesContext)
    const [showForm, setShowForm] = useState(false);
    
    function editPost(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const title = e.currentTarget[1];
        const label = e.currentTarget[2];
        const description = e.currentTarget[3];
        assertIsFormFieldElement(title);
        assertIsSelectElement(label);
        assertIsFormFieldElement(description);

        var labels: string[] = []

        for (let i = 0; i < label.selectedOptions.length; i++) {
            labels = [...labels, label.selectedOptions[i].id]
        }

        const payload = {
            id: post.id,
            token: cookies.token,
            title: title.value,
            labels: labels,
            description: description.value,
        }

        axios.post('/update_post', payload)
        .then(resp => {
            if (resp.data.status === 0) {
                alert("Post saved!")
                window.location.href = "/post/" + resp.data.post.id
            } else if (resp.data.status === 1) {
                alert("Please relog in before trying again.")
            } else {
                if (resp.data.error.title.length === 0) {
                    alert("An unexpected error has occured, please refresh the page and try again")
                } else {
                    let alertMessage = ""
                    if (resp.data.error.title.length > 0) {
                        alertMessage += "Post title " + resp.data.error.title + "\n"
                    }
                    alert(alertMessage)
                }
            }
        })
        .catch(resp => console.log(resp))
    }

    return (<div>
        <div>
            <br/>
            {!showForm && <Button onClick={() => {setShowForm(true)}}>Edit Post</Button>}
        </div>
        {showForm && <form className="z-40 h-full w-full absolute top-0 left-0 bg-gray-100 mx-20" onSubmit={editPost}>
            
            <h1 className="font-bold"><Button type="button" onClick={() => {setShowForm(false)}}><ArrowLeft/></Button> Editing Post</h1>
            <br/>
            <br/>
            <label className="w-auto">Title: </label>
            <input type='text' className="border border-slate-400" defaultValue={post.title} />
            <br/>
            <br/>
            <label>Categories: </label>
            <select multiple={true} className="flex" defaultValue={post.labels}>
                {categories.map((category) => {
                    return (<option key={category.id} id={category.id} value={category.id}>{category.label_name}</option>)
                })}
            </select>
            <br/>
            <label className="w-auto">Post: </label>
            <br/>
            <textarea className="border border-slate-400 w-3/4 h-40 p-1" style={{resize: "none"}} defaultValue={post.description}></textarea>
            {false && <input type='text' className="border border-slate-400" />}
            <br/>
            <Button className="self-end" style={{transform: `translateX(65vw)`}}>Save Edit</Button>
        </form>}
    </div>)
}

export default PostEditor;