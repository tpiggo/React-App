import React from 'react'
import styled from 'styled-components/macro'
import LoginForm from './LoginForm'

const Component = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    min-height: 50vh;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Top = styled.div`
    font-family: 'Raleway', sans-sarif;
    margin: 0;
    font-size: 3rem;
    max-width: 25rem;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 600;
`



const Login = () => (
<Component>
    <Wrapper>
        <Top>
            Login
        </Top>
        <LoginForm/>
    </Wrapper>
</Component>
)

export default Login;