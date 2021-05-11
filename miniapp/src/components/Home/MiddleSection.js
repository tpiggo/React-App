import { faRocket, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components/macro'

// Styled components for easy management.
const MiddleComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(227, 232, 230, 0.5);
`

const Subheader = styled.p`
    color: grey;
    font-size: 0.90rem;
    `

const Header = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 2.25rem;
`

const Text = styled.p`
    margin: 0;
    font-size: 1rem;
    padding: 1% 0;

    &:nth-of-type(1) {
        margin-bottom: 0.5rem;
    }
`

const IconBox = styled.div`
text-shadow: 10 5px 10px rgba(0,0,0, 0.1);
`

const Image = styled.div`
    margin-bottom: 1rem;
`

/**
 * 
 * @returns React Component for the home landing page
 */
 const MiddleSection = ({image}) => (
    <MiddleComponent>
        <Subheader>
            Innovation in every detail.
        </Subheader> 
        <Header>
            Superhero Tasks
        </Header>
        {image===undefined? <FontAwesomeIcon style={{width: '20rem', height: '20rem', color: 'blue', filter: "drop-shadow(10px 5px 2px rgba(0,0,0, 0.2))"}} icon={faRocket}/>:<Image alt="See my image!"/>}
        <Text>You will never use another to-do list app again!</Text>
    </MiddleComponent>
)

export default MiddleSection;