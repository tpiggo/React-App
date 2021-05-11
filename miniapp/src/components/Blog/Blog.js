import React from 'react'
import styled from 'styled-components/macro'

const Component = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    min-height: 25vh;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h2`
    font-family: 'Raleway', sans-sarif;
    margin: 0;
    font-size: 3rem;
    text-align: center;
`

const BiLine = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

const LeftBiLine = styled.p`
    padding: 0.5rem 1.5rem 0.5rem 0;
`

const RightBiLine = styled.p`
    margin-left: auto;
    padding: 0.5rem 1.5rem;
`

const Body = styled.p`
    margin: 0;
    justify-content: right;
    width: 100%;
`


const Blog = ({name, date, title, text}) => (
    <Component>
        <Wrapper>
            <Title>
                {title}
            </Title>
            <BiLine>
                <LeftBiLine>
                    {name}
                </LeftBiLine>
                <RightBiLine>
                    {date}
                </RightBiLine>
            </BiLine>
            <Body>
                {text.split('\n').map(i => (<p>{i}</p>)) } 
            </Body>
        </Wrapper>
    </Component>
)

export default Blog;