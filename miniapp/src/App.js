import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Features from './components/Features';
import GettingStarted from './components/Documentation/GettingStarted';
import ProFeatures from './components/Documentation/ProFeatures';
import Developers from './components/Documentation/Developers';
import BlogHome from './components/BlogHome';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { faInstagram, faFacebook, faReddit , faTwitter} from '@fortawesome/free-brands-svg-icons';

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
                link: "/documentation",
                name: "Documentation",
                subcategories: [
                    {
                        link: "/getting-started",
                        name: "Getting Started",
                        component: GettingStarted
                    },
                    {
                        link: "/pro-features",
                        name: "Pro Features",
                        component: ProFeatures
                    },
                    {
                        link: "/developers",
                        name: "Developers",
                        component: Developers
                    }
                ]
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

        this.footerInfo = {
            right: [
                {
                    icon: faFacebook,
                    link:  "https://facebook.com"
                },
                {
                    icon: faInstagram,
                    link:  "https://instagram.com"
                },
                {
                    icon: faReddit,
                    link:  "https://reddit.com"
                },
                {
                    icon: faTwitter,
                    link:  "https://twitter.com"
                }
            ],
            left: [
                {
                    value: "Our RSS feed",
                    component: null
                },
                {
                    value: "Customer Support",
                    component: null
                },
                {
                    value: "Contact Us",
                    component: null
                },
            ]
        };
    }


    /**
     * Gets the ents and handles it.
     * @param {Event} event 
     */
    handleNavClick = (event, data) => {
        console.log(event)
        this.setState({current: data});
    }

    render() {
        let i = 0;
        let routes = this.links.map(({link, name, component, subcategories}) =>{
            if (link === '/documentation')
                return subcategories.map(({link, component}) => (
                    <Route key={i++} path={link} component={component}/>
                ));
            if (link === "/")
                return <Route key={i++} exact path={link} component={component}/>
            return <Route key={i++} path={link} component={component}/>
        });
        console.log(this.state.current);
        return (
            <div>
                <Header links={this.links} handleClick={this.handleNavClick} current={this.state.current} keys={i}/>
                {routes}
                <Footer icons={this.footerInfo.right} btns={this.footerInfo.left}/>
            </div>
            )
    }
}

export default App;