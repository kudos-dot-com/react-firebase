import React, {Component} from 'react';
import Header from './HeaderComponent';
import HomePage from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Register from './RegisterComponent';
import User from './UserComponent';
import Home from './homepage';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            logged:false
        }
        this.IsLogged=this.IsLogged.bind(this);
    }

    IsLogged(){
        alert('userLogged' + this.state.logged);
    }
    render(){

        const Homepage = () => {
            return <HomePage />
        }

        return(
            <>
                <Header logged={this.IsLogged}/>
                <Switch>
                    <Route path="/homepage" component={() => <HomePage />}></Route>
                    <Route path="/home" component={() => <Home />}></Route>
                    <Route path="/aboutus" component={() => <About />}></Route>
                    <Route path="/contact" component={() => <Contact />}></Route>
                    <Route path="/register" component={() => <Register />}></Route>
                    <Route path="/user" component={() => <User />}></Route>
                    <Redirect to="/home" />
                </Switch>
            </>
        )
    }
}

export default withRouter(Main);