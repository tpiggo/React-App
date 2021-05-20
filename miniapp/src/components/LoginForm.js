import React from 'react'
import styled from 'styled-components/macro'

const Component = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const InnerFormWrap = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.5rem 0.5rem;
    width: 100%;
`
const Label = styled.label`
    width: 5rem
`

const Input = styled.input`
    margin: 0 0.5rem
`

const Submit = styled.button`
    margin: auto;
`

/**
 * Handling the submit request on login. No longer works! We are moving this functionality to another app!
 * @param {Event} event 
 * @param {Function} handleLogin 
 * @returns 
 */
const handleSubmit = (event, handleLogin) => {
    event.preventDefault();
    console.log(event.target);
    let username = document.getElementById('login-username').value;
    if (username===""){
        console.log("User empty")
        return;
    }
    let password = document.getElementById('login-password').value;
    if (password===""){
        console.log("password empty")
        return;
    }
    
    let data = {
        username: username,
        password: password
    }
    /**
     * Creating the login request here.
     */
    fetch('/login', {
        credentials: 'include',
        method: 'POST',
        body:  JSON.stringify(data),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(response => response.json())
    .then(json => { 
        console.log("My josn:", json); 
        if (json.status == 200) {
            console.log("Success!");
            localStorage.setItem('__session', json.session);
            handleLogin(json.session);
        } else {
            console.log("ERROR");
        }
    })
    .catch(error => console.log('Authorization failed : ' + error.message));
}

/**
 * Creates the login form and passes the Application login handler to the prop to maintain state
 * @param {{handleLogin: Function}}  
 * @returns 
 */
const LoginForm = ({handleLogin}) => {
    return (
    <Component>
        <form onSubmit={(e) => handleSubmit(e, handleLogin)}>
            <InnerFormWrap>
                <Label>Username: </Label>
                <Input placeholder="Username here" id="login-username"/>
            </InnerFormWrap>
            <InnerFormWrap>
                <Label>Password: </Label>
                <Input type= "password" id="login-password"/>
            </InnerFormWrap>
            <InnerFormWrap>
                <Submit>Login</Submit>
            </InnerFormWrap>
        </form>
    </Component>
)}

export default LoginForm;