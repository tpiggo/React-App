import React from 'react'
import Blog from './Blog/Blog'


// Creating fake blog posts and 
const blogPosts = [
    {
        name: "Alina Sophia",
        date: "2020-09-28",
        title: "Why the people need more money",
        text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, \
        and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, \
        because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. \n Nor again is there \
        anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure \
        him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has \
        any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? \
        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, \
        so blinded by desire, that they cannot foresee"
    },
    {
        name: "Timothy Piggott",
        date: "2020-09-21",
        title: "Aliens found on Mars",
        text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. \n \
        I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, \
        so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. \n \
        I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. \
        When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage \ of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; \
        and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, \
        and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty"
    }
]

const BlogHome = (i) => (
    blogPosts.map(({name, date, title, text}) =>(
        <Blog key={i++} text={text} name={name} date={date} title={title}/>
    ))
)

export default BlogHome;