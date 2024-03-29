import axios from 'axios';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Button from './Button';
import { useAppSelector } from "../store/store";

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

function PostCreationForm() {
    const [cookies] = useCookies(['token']);
    const categories = useAppSelector((state)=> state.category.categoriesList);
    const [showForm, setShowForm] = useState(false);

    function createPost(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        //Element 0 is the button to go back
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
            token: cookies.token,
            title: title.value,
            labels: labels,
            description: description.value,
        }

        axios.post('/create_post', payload)
        .then(resp => {
            if (resp.data.status === 0) {
                alert("Post created!")
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

    return (<div className="w-full mx-1 h-auto flex-col">
        <div className="h-10">
            {!showForm && <Button onClick={() => {setShowForm(true)}}>Create Post</Button>}
            {showForm && <h1 className='font-bold max-w-80'>Create Post</h1>}
        </div>
        {showForm && <form className="h-auto w=full" onSubmit={createPost}>
            <Button type="button" onClick={() => {setShowForm(false)}}>hide form</Button>
            <br/>
            <br/>
            <label className="w-auto">Title: </label>
            <input type='text' className="border border-slate-400" />
            <br/>
            <br/>
            <label>Categories: </label>
            <select multiple={true} className="flex">
                {categories.map((category) => {
                    return (<option key={category.id} id={category.id}>{category.label_name}</option>)
                })}
            </select>
            <br/>
            <label className="w-auto">Post: </label>
            <br/>
            <textarea className="border border-slate-400 w-11/12 h-40 p-1" style={{resize: "none"}}></textarea>
            {false && <input type='text' className="border border-slate-400" />}
            <br/>
            <Button className="self-end" style={{transform: `translateX(65vw)`}}>Post</Button>
        </form>}
    </div>)
}

export default PostCreationForm;