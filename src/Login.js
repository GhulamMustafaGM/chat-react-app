import React, { useCallback, useContext } from 'react';
import {withRouter, Redirect} from 'react-router';
import app from './base';
import {AuthContect, AuthContext} from './Auth';

const Login = ({ history }) => {
        const handleLogin = useCallback(
            async event => {
                event.preventDefault();
                const {email, password} = event.target.elements;
                try {
                    await app.auth()
                    .signInWithEmailAndPassword(email.value,password.value)
                    history.push("/")
                }catch (error) {
                    alert(error)
                }
            }, [history]
        )
        const {currentUser} = useContext(AuthContext);
        if (currentUser) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                <h1>Log in</h1>
                <form onSubmit={handLeLogin}>
                    <label for="email">
                        Email 
                        <input type="email" name="email" placeholder="Email" />
                    </label>
                    <label for="password">
                        Password   
                        <input type="password" name="password" placeholder="password" />
                    </label>
                    <button type="submit">Log in</button>
                </form>
            </div>
        )
}

export default withRouter(Login);