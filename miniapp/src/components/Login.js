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


/**
 * Creates the login form and passes the Application login handler to the prop to maintain state
 * @param {{handleLogin: Function}}  
 * @returns 
 */
const Login = ({handleLogin}) => (
    <Component>
        <Wrapper>
            <Top>
                Login
            </Top>
            <LoginForm handleLogin={handleLogin}/>
        </Wrapper>
    </Component>
)

export default Login;