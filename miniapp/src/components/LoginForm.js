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
const handleSubmit = (event) => {
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
    let response = new Promise((resolve, reject) => {
        let xml = new XMLHttpRequest();
        xml.open("POST", "http://localhost:5000/login");
        xml.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(xml.response));
            } else {
                reject(JSON.parse({
                    status: this.status,
                    statusText: xml.statusText
                }))
            }
        };
        // On an error.
        xml.onerror = function () {
            reject(JSON.parse({
                status: this.status,
                statusText: xml.statusText
            }))
        }
        xml.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xml.send(JSON.stringify(data));
    });

    response.then(response => {
        console.log(response);
    }).catch(error => {
        console.error(error);
    });
}

const LoginForm = () => (
    <Component>
        <form onSubmit={handleSubmit}>
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
)

export default LoginForm;