import { faBuilding, faPenAlt, faTerminal, faUniversity, faUsers } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styled from 'styled-components/macro'
import EmailForm from "./EmailForm"
import UsedBy from './UsedBy'

const Component = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    min-height: 87vh;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slogan = styled.div`
    font-family: 'Raleway', sans-sarif;
    margin: 0;
    font-size: 5rem;
    max-width: 50rem;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 600;
`

const Text = styled.p`
    margin: 0;
    font-size: 1.25rem;
    padding: 1% 0;

    &:nth-of-type(1) {
        margin-bottom: 0.5rem;
    }
`

// Could be in a db
const users = [
    {
        name: "Regular People",
        icon: faUsers,
        key: "users1"
    },
    {
        name: "Developers",
        icon: faTerminal,
        key: "users2"
    },
    {
        name: "Students",
        icon: faUniversity,
        key: "users3"
    },
    {
        name: "Enterprises",
        icon: faBuilding ,
        key: "users4"
    },
    {
        name: "Writers",
        icon: faPenAlt ,
        key: "users5"
    }
]


/**
 * Creates a hero react component.
 * @returns A Hero React Component.
 */
const Hero = () => (
    <Component>
        <Wrapper>
            <Slogan>
                Make your task unique
            </Slogan>
            <Text>
                Superhero To-Do List helps solve the problems.
            </Text>
            <Text>
                Simple and easy!
            </Text>
            <EmailForm/>
            <UsedBy users={users}/>
        </Wrapper>
    </Component>
)

export default Hero;