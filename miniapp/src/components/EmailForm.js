import React from 'react'
import styled from 'styled-components/macro'

const Component = styled.div`
    display: flex;
`

const Input = styled.input`
    
`

const Submit = styled.button`

`

const EmailForm = () => (
    <Component>
        <form>
            <Input placeholder="place your email here"/>
            <Submit>Send your app</Submit>
        </form>
    </Component>
)

export default EmailForm;
