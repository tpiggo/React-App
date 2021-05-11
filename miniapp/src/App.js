import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import Pricing from './components/Pricing';
import BlogHome from './components/BlogHome';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';

/**
 * The main application
 * All state is held here, globally and can be shared with the stateless components
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
               current: window.location.pathname
        }

        this.links = [
            {
                link: "/",
                name: "Home",
                component: Home
            },
            {
                link: "/features",
                name: "Features",
                component: Features
            },
            {
                link: "/pricing",
                name: "Pricing",
                component: Pricing
            },
            {
                link: "/blog",
                name: "Blog",
                component: BlogHome
            },
            {
                link: "/login",
                name:  "Login",
                component: LoginForm
            },
        ]
    }


    /**
     * Gets the ents and handles it.
     * @param {Event} event 
     */
    handleNavClick = (event, data) => {
        this.setState({current: data});
    }

    render() {
        let i = 0;
        console.log(this.state.current)
        let routes = this.links.map(({link, name, component}) =>{
            if (link === "/")
                return <Route key={i++} exact path={link} component={component}/>
            return <Route key={i++} path={link} component={component}/>
        });

        return (
            <div>
                <Header links={this.links} handleClick={this.handleNavClick} current={this.state.current} keys={i}/>
                {routes}
            </div>
            )
    }
}

export default App;