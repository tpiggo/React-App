import { faDropbox } from '@fortawesome/free-brands-svg-icons'
import { faMountain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components/macro'

const gettingStartedData = [
    {
        title: "What I Need To Get Started",
        items: [
            "Your Logo (PDF, JPEG, etc)",
            "Hosting Login (hosting account)",
            "Website Login (Wordpress)",
            "Images for any new pictures of yourself",
            "Branding style guides"
        ],
        rightIcon: null
    },
    {
        title: "Basecamp",
        value: "Basecamp is an awesome online platform for communication and project management. We’ll be using this to send messages, share files and track \
            progress during the process. This will help alleviate content and images being lost in long email threads. Everyone loves email threads…right?! (Don’t \
            worry you can still use your email. The messages will post directly to basecamp!) Once your project is underway, you’ll receive an email to set up \
            your basecamp profile and we’ll be off and running!",
        rightIcon: faMountain
    },
    {
        title: "Dropbox",
        value: "Dropbox is a great online image/file sharing platform. This isn’t necessary for every project, but if you have more than 15-20 images for your \
        website or if they’re too big to send through email or post on basecamp, we can use dropbox. We can also use this to share important logins and credentials \
        instead of sending through email. I will set up a folder for the project and will share the folder with you via email. You can upload all images and files there.",
        rightIcon: faDropbox
    },
    {
        title: "The Design Process",
        topText: "Designing a website, no matter how big or small, is an extensive process that can be overwhelming. I’ve outlined my process into 3 steps:",
        subItems: [
            {
                title: "Step 1 – Layout and Design",
                value: "A large and time consuming part of website design is in the layout, structure and design of the site. I’ll create the framework of the website and will send the homepage and a sub-page (or more upon request) for approval."
            },
            {
                title: "Step 2 – Development",
                value: "Once the site layout and design is approved, I’ll move forward with the designing of all pages, functionality and responsive code, making sure your site looks great and functions nicely across all devices and web browsers."
            },
            {
                title: "Step 3 – Revisions and Edits",
                value: "Once the site is ready for final review, you’ll be able to review each page and we can make detailed edits until the site is revised completely."
            }
        ]
    }
]
const Component = styled.div`
    display:flex;
    flex-direction: column;
    background-color: rgba(0,0,0, 0.05);
    align-items: center;
`

const ContainerWrap = styled.div`
    display:flex;
    flex-direction: column;
    padding: 1rem 5rem;
`

const ContainerWrapSpecial = styled.div`
display:flex;
flex-direction: column;
padding: 3rem 5rem 5rem 5rem;
background-image: url("desk3.jpg");
background-size:cover;
`

const Header = styled.h2``

const List = styled.ul``

const BottomBox = styled.div`
display:flex;
`

const ListItem = styled.li``

const Paragraph = styled.div`
    width: 80%;
    padding: 0 1rem 0 0;
`

const InnerBoxWrap = styled.div`
    display: flex;
` 

const InnerBoxDiv = styled.div`
    margin: 0 1rem;
    padding: 1rem 1rem;
    background-color: rgba(0,0,0,0.3);
    color: white;
`

const InnerBoxHead = styled.h3``

const RightIconBox = styled.div`
    padding: 1rem 2rem;
    width: 20%;
`

const getIconColor = (icon) => {
    if (icon === faDropbox ) {
        return 'blue';
    }
    return 'green';
}

export default function GettingStarted() {
    let i = 0;
    return (
        <Component>
            <h1 style={{textAlign:'center'}}>Getting Started</h1>
            {gettingStartedData.map(item => {
                if (item.items != undefined) {
                    return (
                        <ContainerWrap key={"cw" + i++}>
                            <Header key={"gsh" + i++}>
                                {item.title}
                            </Header>
                            <List key={"gsl" + i++}>
                                {item.items.map((listItem) => (
                                    <ListItem key={"gsli" + i++}>{listItem}</ListItem>
                                ))}
                            </List>
                        </ContainerWrap>
                    );
                } else if (item.topText != undefined) {
                    return (
                        <ContainerWrapSpecial key={"cw" + i++}>
                            <Header style={{textAlign: 'center'}} key={"gsh" + i++}>
                                {item.title}
                            </Header>
                            <Paragraph key={"gsp" + i++} style={{width: "inherit", padding: '1rem 3rem', margin:'0 2rem'}}>
                                {item.topText}
                            </Paragraph>
                            <InnerBoxWrap key={"gsibw" + i++}>
                                {item.subItems.map((item) => (
                                    <InnerBoxDiv key={"gsib" + i++}>
                                        <InnerBoxHead>{item.title}</InnerBoxHead>
                                        <div>{item.value}</div>
                                    </InnerBoxDiv>
                                ))}
                            </InnerBoxWrap>
                        </ContainerWrapSpecial>
                    )
                }
                return (
                    <ContainerWrap key={"cw" + i++}>
                            <Header key={"gsh" + i++}>
                                {item.title}
                            </Header>
                            <BottomBox key={"gsbb" + i++}>
                                <Paragraph key={"gsp" + i++}>
                                    {item.value}
                                </Paragraph>
                                <RightIconBox key={"gsrib" + i++}>
                                    <FontAwesomeIcon style={{width: '7.5rem', height: '7.5rem', color: getIconColor(item.rightIcon)}}  icon={item.rightIcon}/>
                                    <div style={{color: getIconColor(item.rightIcon), fontSize: '2rem', fontWeight: '600'}}>{item.title}</div>
                                </RightIconBox>
                            </BottomBox>
                        </ContainerWrap>
                )
            })}
        </Component>
    )
}