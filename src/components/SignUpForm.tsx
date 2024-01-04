import React from 'react';

import Button from './Button';

function SignUpForm() {
    return (<div className="z-40 bg-gray-100 bg-opacity-80 absolute top-0 left-0 h-screen w-screen overflow-y-auto">
        <div className="mx-40 my-10 h-3/4 flex-col bg-gray-100 bg-opacity-100">
            <div className="flex justify-between">
                <h1 className="font-bold">Sign up to create an account!</h1>
            </div>
            <div className="flex-col">
                <label>This is where the form for username and password should be</label>
                <label>Maybe some stats? Likes dislikes?</label>
            </div>
            <div>
                <label>This is where the form submit button should be</label>
            </div>
        </div>            
    </div>
    )
}

export default SignUpForm;