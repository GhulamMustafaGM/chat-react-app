import React, { useCallback } from 'react';
import {withRouter} from 'react-router';
import app from './base';

const Signup = ({history}) => {
    const handleSignup = useCallback(
        async event => {
            event.preventDefault()
            const {email,password} = event.target.elements;
            try {
                await app.auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                // save use data into FIREBASE REALTIME DATABASE
                app.database().ref(`users/${app.auth().currentUser.uid}`)
                .set({
                    id:app.auth().currentUser.uid,
                    email:email.value
                })
                history.push("/")
            } catch(error) {
                alert(error)
            }
        }, [history]
    )
    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSignup} >
                <label for="email">
                    Email  
                    <input type="email" name="email" placeholder="Email" />
                </label>
                <label for="password">
                    Password  
                    <input type="password" name="password" placeholder="Password" />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default withRouter(Signup);
