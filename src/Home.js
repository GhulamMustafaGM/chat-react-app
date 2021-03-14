import React, {component} from 'react';
import app from '.base';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link  
} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            admin:''
        }
    }
    render() { 
        return (
            <Router>
                <div>
                    <h1>Home Page</h1>
                    <button onClick={() => app.auth().signOut()} >Logout</button>
                </div>

                <Switch>
                    <Route>
                        
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Home;