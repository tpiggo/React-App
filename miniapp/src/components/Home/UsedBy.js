import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {IconDefinition} from "@fortawesome/fontawesome-svg-core"


// Styled components for easy management.
const MainComponent = styled.div`
    color: grey;
`

const Text = styled.p`
    font-weight: 600;
    text-align: center;
`

const WrapUsers = styled.div`
    display: flex;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    justify-content: center;
    align-items: center;
`

const Type = styled.p`
    margin: 0.25rem 0;
`

/**
 * Creates a user from a list of users with text overhead.
 * @param {{users: Array<{name: String,  key: String, icon: IconDefinition}>}} param0 
 */
const UsedBy = ({users}) => (
    <MainComponent>
        <Text>
            Used by:
        </Text>
        <WrapUsers>
            {users.map((user) => (
                <Item key={user.key}>
                    <FontAwesomeIcon key={user.key + "-fai"} icon={user.icon} />
                    <Type key={user.key + "-type"}>{user.name}</Type>
                </Item>
            ))}
        </WrapUsers>
    </MainComponent>
)

export default UsedBy;