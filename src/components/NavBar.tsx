import React, { useState, ComponentProps, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import Button from './Button';

function assertIsFormFieldElement(element: Element): asserts element is HTMLInputElement | HTMLSelectElement | HTMLButtonElement {
    // Customize this list as necessary −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    if (!("value" in element)) {
        throw new Error(`Element is not a form field element`);
    }
}

type NavBarProp = ComponentProps<"div">

export default function NavBar({ ...props }: NavBarProp) {
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'username']);
    const [loggedIn, setLoggedIn] = useState(false);
    const [signUpForm, setSignUpForm] = useState(false);
    const [logInForm, setLogInForm] = useState(false);

    useEffect(() => {
        setLoggedIn(cookies.token != null)
    }, [cookies.token])

    function signUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const username = e.currentTarget[0];
        const password = e.currentTarget[1];
        assertIsFormFieldElement(username);
        assertIsFormFieldElement(password);
        const payload = {
            username: username.value,
            password: password.value,
        }

        axios.post('/signup', payload)
        .then(resp => {
            if (resp.data.status === 0) {
                setCookie("token", resp.data.token)
                setCookie("username", username.value)
            } else if (resp.data.status === 1) {
                let alertMessage = ""
                try {
                    if (resp.data.error.username.length > 0) {
                        alertMessage += "Username " + resp.data.error.username + "\n"
                    }
                } catch (error) {
                }
                try {
                    if (resp.data.error.password.length > 0) {
                        alertMessage += "Password " + resp.data.error.password + "\n"
                    }
                } catch (error) {
                }
                if (alertMessage === "") {
                    alert("An unexpected error has occured, please refresh the page and try again")
                } else {
                    alert(alertMessage)
                }
            }
        })
        .catch(resp => alert("There seems to be an error, please refresh the page and try again"))
    }

    function logIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const username = e.currentTarget[0];
        const password = e.currentTarget[1];
        assertIsFormFieldElement(username);
        assertIsFormFieldElement(password);
        const payload = {
            username: username.value,
            password: password.value,
        }
        console.log(payload)

        axios.post('/login', payload)
        .then(resp => {
            if (resp.data.status === 0) {
                setCookie("token", resp.data.token)
                setCookie("username", username.value)
            } else {
                alert("You have entered the wrong username/password, please try again.")
            }
        })
        .catch(resp => console.log(resp))
    }
    
    function logOut() {
        removeCookie('token');
        removeCookie('username');
    }

    return <div className="h-10 flex mt-5 justify-between">
        <h1 className="font-bold">Web Forum</h1>
        {!loggedIn && <div className="space-x-5">
            <Button onClick={() => {setSignUpForm(prev => {
                if (!prev) setLogInForm(false)
                return !prev})}}>
                <label>Sign Up</label>
            </Button>
            {signUpForm && <form onSubmit={signUp} className="absolute right-40 z-40 bg-gray-200 h-40 w-80 border align-content-centre">
                <label>Username: </label>
                <input className="w-40 border"></input>
                <br/>
                <br/>
                <label>Password: </label>
                <input className="w-40 border"></input>
                <br/>
                <br/>
                <Button type='submit'>
                    Create Account
                </Button>
            </form>}
            <Button onClick={() => {
                setLogInForm(prev => {
                    if (!prev) setSignUpForm(false)
                    return !prev})}}>
                Log In
            </Button>
            {logInForm && <form onSubmit={logIn} className="absolute right-20 z-40 bg-gray-200 h-40 w-80 border align-content-centre">
                <label>Username: </label>
                <input className="w-40 border"></input>
                <br/>
                <br/>
                <label>Password: </label>
                <input className="w-40 border"></input>
                <br/>
                <br/>
                <Button onClick={logOut}>
                    Log In
                </Button>
            </form>}
        </div>}
        {loggedIn && <Button onClick={logOut}>
            Log Out
        </Button>}
    </div>
}