import React, { useState } from 'react'
import styled from 'styled-components/macro'
import {Link} from 'react-router-dom';
import './Header.css'

// Styled components for easy management.
const HeaderComponent = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
    background: inherit;
`

const HeaderWrapper = styled.div`
    display: flex;
`

// Button for the header
const Button = styled.button`
    background-color: transparent;
    border: 0;
    font-size: 0.85rem;
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.25s ease-in;

    &:not(:last-of-type) {
        margin-right: 1rem;
    }

    &:hover {
        cursor: pointer;
        background-color: #EDF2F7;
    }
`

// Dropdown button
const DropdownButton = styled.button`
    background-color: transparent;
    border: 0;
    font-size: 0.85rem;
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    width: 100%;
    transition: background-color 0.25s ease-in;

    &:hover {
        cursor: pointer;
        background-color: #EDF2F7;
    }
`


const HoverDrop = styled.button`
    text-decoration: none;
    background-color: transparent;
    border: 0;
    display: flex;
    flex-direction: row;
    font-size: 0.85rem;
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.25s ease-in;
    &:hover {
        cursor: pointer;
        background-color: #EDF2F7;
    }
`

// Container for holding the dropdown.
const DropdownContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0, 0.1);
    border-right: 1px solid rgba(0,0,0, 0.1);
    border-left: 1px solid rgba(0,0,0, 0.1);
    border-bottom: 1px solid rgba(0,0,0, 0.1);
`

/**
 * Create a hoverable dropdown menu.
 * @param {{name: String, nextkey: Number}} props 
 * @returns React container for the Hoverable Dropdown menu
 */
function HoverDropEl(props) {
    // Set the state using setState hook
    const [isShown, setIsShown] = useState(false);
    let i = props.nextkey;
    i++;
    // hoverbutton using onMouse actions
    return (
        <div className="HoverableDiv">
            <HoverDrop 
                key={i++}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                {props.name}
            </HoverDrop>
            {isShown && (
                <DropdownContainer 
                    key={"dropdown" + i++} 
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                    {props.elements}
                </DropdownContainer>
                )}
        </div>
        
    )
}

/**
 * 
 * @param {{links: Array<{
 *              name: String, 
 *              link: String, 
 *              component: React.Component, 
 *              subcategories?: Array}>,
 *          handleClick: Function, 
 *          accessProtected: Boolean, 
 *          current: String, 
 *          keys: Number
 *      }} 
 * @returns React container for the header
 */
const Header = ({links, handleClick, accessProtected, current, keys}) => {    
    let buttons = links.map(({name, link, component, subcategories}) => {
        if (component === undefined)
        {
            // Create the dropdown buttons.
            let dropdown = subcategories.map(({link, name}) => (
                <Link key={keys++} to={link} onClick={(e) => handleClick(e, link)}>
                    <DropdownButton key={keys++} className={current===link?"active":""}>{name}</DropdownButton>
                </Link>
            )); 
            // Render them here.
            return (
                <HoverDropEl key={keys++} nextkey={keys++} elements={dropdown} name={name}/>
            );
        }

        return(
            <Button link={link} key={keys++} className={current===link?"active":""}>{name}</Button>
        )
    });
    let buttonLinks = buttons.map(button =>{
        if (button.props.link === undefined)
        {
            return (
                button
            );
        }
        return(
            <Link key={keys++} to={button.props.link} onClick={(e) => handleClick(e, button.props.link)}>{button}</Link> 
        )
    });

    return (
    <HeaderComponent>
        <HeaderWrapper>
            {buttonLinks}
        </HeaderWrapper>
    </HeaderComponent>
    );
}

export default Header;