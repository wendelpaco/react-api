import React from 'react';
import { Redirect, Route, HashRouter as Router, Switch, } from 'react-router-dom';
import HomeComponent from '../components/Home.component';
import LoginComponent from '../components/login/Login.component';
import NavHeader from '../components/template/header/Header';
import Footer from '../components/template/footer/Footer';


const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) {
        return false
    } else {
        return true
    }
}

const AuthRoute = ({ component: Component, ...rest }) => {
    return (
        <div>
            <NavHeader />
            <Route {...rest} render={props => (
                checkAuth() ? (
                    <Component {...props} />
                ) : (
                        <Redirect to={{ pathname: '/' }} />
                    )
            )} />
            <Footer />
        </div>
    )
}

const AuthRouteLogin = ({ component: Component, ...rest }) => {
    return (
        <div>
            <Route {...rest} render={props => (
                checkAuth() ? (
                    <Redirect to={{ pathname: '/home' }} />
                ) : (
                        <Component {...props} />
                    )
            )} />
        </div>
    )
}

const RouterContainer = () => {
    return (
        <Router>
            <div className="auth">
                <Switch>
                    <AuthRouteLogin exact path="/" component={LoginComponent} />
                    <AuthRoute exact path="/home" component={HomeComponent} />
                    <Route render={() =>
                        <div>
                            {console.log("404 NOT FOUND!")}
                            <Redirect to="/" />
                        </div>
                    } />
                </Switch>
            </div>
        </Router>
    )
}
export default RouterContainer;
