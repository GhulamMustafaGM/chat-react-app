import React, {useContext} from 'react';
import {Route, redirect} from 'react-router-dom';
import {AuthContext, Redirect} from './Auth';

const PrivateRoute = ({component:RouteComponent,...rest}) => {
    const {currentUser} = useContext(AuthContext);

    return ( 
        <Route {...rest}
        render={routeProps => 
        !!currentUser ? (
            <RouteComponent {...routeProps} />
        ):( 
            <Redirect to={"/login"} />
        ) 
    }
    >

    </Route>
    )
}
export default PrivateRoute;