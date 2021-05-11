import React from 'react'
import styled from 'styled-components/macro'

const Component = styled.div`
    display: flex;
`

const Input = styled.input`
    
`

const Submit = styled.button`

`

const LoginForm = () => (
    <Component>
        <form>
            <Input placeholder="email here"/>
            <Input type= "password"/>
            <Submit>Send your app</Submit>
        </form>
    </Component>
)

export default LoginForm;