import { faApplePay, faCcAmazonPay, faCcAmex, faCcDiscover, faCcMastercard, faCcVisa, faSuperpowers } from '@fortawesome/free-brands-svg-icons'
import { faBookOpen, faCloudRain, faMask } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components/macro'

const superheroFeatures = [
    {
        feature: "We have super powers!",
        value: "Super powers make us different from the rest!",
        icon: faSuperpowers
    },
    {
        feature: "We have masks!",
        value: "We can do your tasks without people knowing who is doing it!",
        icon: faMask
    },
    {
        feature: "We work rain or shine!",
        value: "Unlike other workers in the workforce, we work in any weather. Worst case we will change it!",
        icon: faCloudRain
    },
    {
        feature: "Expert Knowledge",
        value: "With our vast experience gained over the years, we have gained expert knowledge",
        icon: faBookOpen
    },
    {
        feature: "We accept all types of payments!",
        icons: [
            faApplePay,
            faCcMastercard,
            faCcAmazonPay,
            faCcAmex,
            faCcDiscover,
            faCcVisa
        ]
    },
]


const Component = styled.div`
    display:flex;
    flex-direction: column;
`

const WrapIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Wrap = styled.div`
display: flex;
width: 100%;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
    width: 80%;
    align-items: center;
    background-color: rgba(0,0,0, 0.75);
    border-radius: 0.75rem;
    color: white;
`

const Head = styled.h2``

const Text = styled.p``

const IconBox = styled.div`
`

const createBoxes = (i, item, style) => {
    if (item.icons != undefined) {
        return (
            <WrapIcon key={"wrap"+i}>
                <Head key={"head"+i}>{item.feature}</Head>
                <IconBox key={"iconbox"+i}>
                    {item.icons.map(icon => (
                        <FontAwesomeIcon style={{width: '3rem', height: '3rem', padding: '2rem'}} icon={icon}/>
                    ))}
                </IconBox>
            </WrapIcon>
        );
    }
    return chooseSide(i, item, style);
}

const chooseSide = (i, item, style) => {
    if (i % 2 == 0) {
        return (
            <Wrap key={"wrap"+i}>
                <FontAwesomeIcon style={style} icon={item.icon}/>
                <TextBox key={"textbox"+i}>
                    <Head key={"head"+i}>{item.feature}</Head>
                    <Text key={"text" + i}>{item.value}</Text>
                </TextBox>
            </Wrap>
        );
    }
    return (
        <Wrap key={"wrap"+i}>
            <TextBox key={"textbox"+i}>
                <Head key={"head"+ i}>{item.feature}</Head>
                <Text key={"text" + i}>{item.value}</Text>
            </TextBox>
            <FontAwesomeIcon style={style} icon={item.icon}/>
        </Wrap>
    );
}


const Features = () => {
    let i = 0;
    return (
        <Component>
            {superheroFeatures.map(item => (
                createBoxes(i++, item, {width: '5rem', height: '5rem', width: '20%', padding: '2rem'})
            ))}
        </Component>
    )
}
    


export default Features;