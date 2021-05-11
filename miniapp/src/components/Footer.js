import { faFacebook, faInstagram, faReddit, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components/macro'

// Styled components for easy management.
const FooterComponent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.2)
`
const LinkBox = styled.div`
display:flex;
flex-direction: column;

`

const IconBox = styled.div`
display: flex;
flex-direction: row;
`
// Transition reference to outside source.
const IconRef = styled.a`
display: flex;
font-size: 3rem;
padding: 1rem;
transition: all .2s ease-in-out;
&:hover {
   transform: scale(1.2);
}
`

function getStyle( input ) {
    switch (input) {
        case faReddit:
            return {
                background: 'darkorange', 
                color: "white", 
                width: '3rem',
                height: '3rem',
                borderRadius: '3rem'
            }
        case faFacebook:
            return {color: "#1778F2"};
        case faInstagram:
            return {
                background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', 
                color: "white", 
                width: '3rem',
                height: '3rem',
                borderRadius: '0.9rem'
            }
        case faTwitter:
            return {
                background: '#00d4ff', 
                color: "white", 
                width: '3rem',
                height: '3rem',
                borderRadius: '0.5rem'
            }
    }
}

const LeftButton = styled.button`
    background-color: transparent;
    border: 0;
    font-size: 1.25rem;
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.25s ease-in;

    &:hover {
        cursor: pointer;
        background-color: #EDF2F7;
    }
`

/**
 * Footer component for the bottom of eveyr page
 * @param {{btns: Array<{value: String,  link: React.Component>, icons: Array<{icon: IconDefinition, link: String>}} param0 
 */
const Footer = ({btns, icons}) => {
    let i = 0;
    let j = 0;
    // map the two lists to their respective elements.
    return (
        <FooterComponent>
            <IconBox>
                {icons.map(item =>(
                        <IconRef key={"rightelement" + j++} target="blank" href={item.link} primary>
                            <FontAwesomeIcon icon={item.icon} style={getStyle(item.icon)}/>
                        </IconRef>
                ))}
            </IconBox>
            <LinkBox>
            {btns.map(item => (
                <LeftButton key={"leftbtn" + i++}>
                    {item.value}
                </LeftButton>
            ))}
            </LinkBox>
        </FooterComponent>
    )
}

export default Footer;