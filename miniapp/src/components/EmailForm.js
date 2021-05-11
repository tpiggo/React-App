import React from 'react'
import styled from 'styled-components/macro'

const Form = styled.form`
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Input = styled.input`
    width: 20rem;
    font-size: 20px;
    padding: 0.25rem;
`

const Submit = styled.button`
    border: 1px orange solid;
    border-radius: 0.375rem;
    background-color: rgba(255,0,0,0.7);
    color: white;
    padding: 0.5rem;
    font-size: 20px;

    &:hover {
        background-color: red;
        cursor: pointer;
    }
`

const EmailForm = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log("clicked");
    }

    return (
        <Form onClick={handleClick}>
            <Input placeholder="Email your email here"/>
            <Submit>Send your app</Submit>
        </Form>
    )
}

export default EmailForm;
