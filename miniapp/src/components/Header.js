import React from 'react'
import styled from 'styled-components/macro'
import {Link} from 'react-router-dom';
import './Header.css'


const HeaderComponent = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
`

const HeaderWrapper = styled.div`
    display: flex;
`
const Button = styled.button`
    background-color: transparent;
    border: 0;
    font-size: 0.85rem;
    border-radius: 0.375rem;
    padding: 0.5rem 1.25rem;
    transition: background-color 0.25s ease-in;

    &:not(:last-of-type) {
        margin-right: 1rem;
    }

    &:hover {
        cursor: pointer;
        background-color: #EDF2F7;
    }
`

const Header = ({links, handleClick, current, keys}) => {    
    let buttons = links.map(({name, link}) => (
        <Button link={link} key={keys++} className={current===link?"active":""} disabled={current===link?true:false}>{name}</Button>
    ));

    let buttonLinks = buttons.map(button =>(
        <Link key={keys++} to={button.props.link} onClick={(e) => handleClick(e, button.props.link)}>{button}</Link>
    ));

    return (
    <HeaderComponent>
        <HeaderWrapper>
            {buttonLinks}
        </HeaderWrapper>
    </HeaderComponent>
    );
}

export default Header;