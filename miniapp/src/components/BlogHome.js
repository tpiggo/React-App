import React from 'react'
import Blog from './Blog/Blog'


// Creating fake blog posts and 
const blogPosts = [
    {
        name: "Alina Sophia",
        date: "2020-09-28",
        title: "Why the people need more money",
        text: "We want more money!"
    }
]

const BlogHome = (i) => {
    return blogPosts.map(({name, date, title, text}) =>(
        <Blog key={i++} text={text} name={name} date={date} title={title}/>
    ))
}

export default BlogHome;