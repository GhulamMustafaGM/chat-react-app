import React, {useState, useEffect} from 'react';
import app from './base';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        app.database().ref(`users`)
        .on('value', (users) => {
            let usersArray = []
            users.forEach((user) => {
                console.log('EACH USER -- ', user.val())
                usersArray.push(user.val())
            })
            console.log(usersArray)
            setUsers(usersArray)
        })
        console.log(users)
    },[])
        return (
            <Router>
                <div>
                    <h1>Home Page</h1>
                    {users.map(user => {
                        return (
                            <div>
                                <p>{user.email}</p>
                            </div>
                        )
                    })}
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