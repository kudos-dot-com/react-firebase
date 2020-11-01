import React, {Component} from 'react';
import { Spinner , Alert , Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler, Jumbotron,
        Button, Modal, ModalHeader, ModalBody, Form, Label, Input, FormGroup } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import fire from './fire';

class Header extends Component {
    
   
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen : false,
            isModalOpen : false,
            isUserLoggedIn: false,
            isRotating:false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.LogOut = this.LogOut.bind(this);
        this.toggleLogged = this.toggleLogged.bind(this);
        this.userStatus = this.userStatus.bind(this);
        this.handleRotate=this.handleRotate.bind(this);
    }

 

    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }
    handleRotate()
    {
        this.setState({
            isRotating:!this.state.isRotating
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }
    toggleLogged(){
        this.setState({
            isUserLoggedIn: !this.state.isUserLoggedIn
        });
        return(
            <Alert>logged in</Alert>
        );
    }
    
    handleLogin(event){
        this.toggleModal();
        this.handleRotate();
        //alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
       

        fire
        .auth()
        .signInWithEmailAndPassword(this.username.value,this.password.value)
        .then(cred=>{
            console.log(cred);
            this.toggleLogged();
          this.handleRotate();
           
        })
        .catch(err=>{
        console.log(err);
        this.handleRotate();
        });
        
        
        event.preventDefault();

    }
    LogOut(e){
        e.preventDefault();
        
        fire.auth()
        .signOut()
        .then(()=>{
            console.log('user logged out');
            this.toggleLogged();
        })
        .catch(err=>{
           console.log(err);
        })
       
    }
    getStyle=()=>{
        if(this.state.isUserLoggedIn)
        {
            return {
                display:'block'
            }
        }else{
            return{
                display:'none'
            }
        }
    }

    getSpinnerStyle=()=>{
        if(this.state.isRotating)
        {
            return {
                width: '3rem', height: '3rem' ,position:'relative',top:'50%',left:'50%',
                 display:'block'
            }
        }else{
            return{
                width: '3rem', height: '3rem' ,position:'relative',top:'50%',left:'50%',
                display:'none'
            }
        }
    }

    userLoggedOut=()=>{
        if(!this.state.isUserLoggedIn)
        {
            return {
                display:'block'
            }
        }else{
            return{
                display:'none'
            }
        }
    }
    userStatus()
    {
        fire.auth().onAuthStateChanged(user=>{
            console.log(user);
        })
    }
    render(){
        return(
            <>  
                <Navbar light expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                    <NavbarBrand className="mr-auto" href="/">Hackathon</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem style={this.getStyle()}>
                            <NavLink className="nav-link" to="/home">
                                <span  className="fa fa-home fa-lg"></span>Home
                            </NavLink>
                        </NavItem>
                        <NavItem style={this.getStyle()}>
                            <NavLink className="nav-link" to="/homepage">
                                <span  className="fa fa-home fa-lg"></span>Explore
                            </NavLink>
                        </NavItem>
                        <NavItem style={this.getStyle()}>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lg"></span>About Us
                            </NavLink>
                        </NavItem>
                        <NavItem style={this.getStyle()}>
                            <NavLink className="nav-link" to="/contact">
                                <span className="fa fa-address-card fa-lg">Contact</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/user">
                            <Button outline style={this.getStyle()} className="mx-2">
                                    <span className="fa fa-user fs-lg"></span> Username
                            </Button> 
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <Button outline style={this.userLoggedOut()} onClick={this.toggleModal} className="m-2">
                                <span className="fa fa-sign-in fs-lg"></span> Login
                            </Button>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/register">
                                <Button outline style={this.userLoggedOut()}>
                                    <span className="fa fa-user-plus fs-lg"></span>Sign Up
                                </Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/register">
                                <Button outline style={this.getStyle()} onClick={this.LogOut} >
                                    <span className="fa fa-sign-out fs-lg"></span> LogOut
                                </Button>
                            </NavLink>  
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
                </Navbar>
                <input type="text"
                className="form-search"
                 style={this.getStyle()} 
                    placeholder="search"
                />
                <Jumbotron style={this.getStyle()} >
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>GuideYuva</h1>
                                <p>We guide budding young developers and suggest community groups to create a unique open source experience. Our expert mentors will definitely provide the solution you have been craving thus far!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Spinner  style={this.getSpinnerStyle()} />{' '}
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef= {(input) => this.username = input} />
                            </FormGroup>
                        
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef= {(input) => this.password = input}/>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef= {(input) => this.remember = input} />Remember Me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="Submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;