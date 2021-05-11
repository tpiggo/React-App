import React from 'react'
import styled from 'styled-components/macro'
import Hero from './Home/Hero';
import MiddleSection from './Home/MiddleSection';
import RightSection from './Home/RightSection';
import LeftSection from './Home/LeftSection';


const HomeComponent = styled.div``


/**
 * 
 * @returns React Component for the home landing page
 */
const Home = () => (
    <HomeComponent>
        <Hero />
        <MiddleSection />
    </HomeComponent>
)

export default Home;