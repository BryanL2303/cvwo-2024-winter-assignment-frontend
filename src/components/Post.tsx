import React, { useState } from 'react';

import Button from './Button';

type label = {
    id: string,
    label_name: string
}
type PostProp = {
    id: string,
    title: string,
    labels: Array<label>,
    description: string,
    date: string,
    author: string,
    search: string,
}

function Post({ id, title, labels, description, date, author, search }: PostProp) {
    if (title != null && description != null && 
        (title.toLowerCase().includes(search.toLowerCase()) 
            || description.toLowerCase().includes(search.toLowerCase()) 
            || author.toLowerCase().includes(search.toLowerCase()))) {
        return (<div id="1" className="w-128 h-40 border flex justify-between hover:bg-secondary-hover" 
            onClick={() =>{
                window.location.href = '/post/' + id;
            }}
        >
            {false && <label className='w=1/4'>This should be an image</label>}
            <div className="w-full h-auto flex-col justify-between">
                <div className="h-10 flex overflow-y-hidden justify-between">
                    <h1 className='font-bold max-w-80'>{title}</h1>
                    <div className="max-w-64 overflow-y-hidden overflow-x-auto space-x-2 touch-pan-x">
                        {labels.map((label) => {
                            return <label key={label.id} className="border bg-gray-400">{label.label_name}</label>
                        })}
                    </div>
                </div>
                <div className="h-20 overflow-hidden">
                    <label className="h-20 w-auto overflow-hidden">{description}</label>
                </div>
                <div className="h-10">
                    <p>{date} -{author}</p>
                </div>
            </div>
        </div>)
    } else {
        return (<div></div>)
    }
}

export default Post;