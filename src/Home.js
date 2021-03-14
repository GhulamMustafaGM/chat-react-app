import React, {Component} from 'react';
import app from './base';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const Home = () => {
        return (
            <Router>
                <div>
                    <h1>Home Page</h1>
                    <button onClick={() => app.auth().signOut()} >Logout</button>
                </div>

                <Switch>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                </Switch>
            </Router>
        );
    }

export default Home;