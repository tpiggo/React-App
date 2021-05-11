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


const LoginForm = () => (
    <Component>
        <form>
            <InnerFormWrap>
                <Label>Username: </Label>
                <Input placeholder="email here"/>
            </InnerFormWrap>
            <InnerFormWrap>
                <Label>Password: </Label>
                <Input type= "password"/>
            </InnerFormWrap>
            <InnerFormWrap>
                <Submit>Login</Submit>
            </InnerFormWrap>
        </form>
    </Component>
)

export default LoginForm;