import React from 'react'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Layout, Header, Navigation, Drawer,Content } from 'react-mdl'

function Navbar() {
    return (
        <div style={{height: '300px', position: 'relative'}}>
        <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
            <Header transparent title="Portfolio" style={{color: 'white'}}>
                <Navigation>
                    <a href="/">Home</a>
                    <a href="/">About me</a>
                    <a href="/">Resume</a>
                    <a href="/">Contact</a>
                </Navigation>
            </Header>
            <Drawer title="Portfolio">
                <Navigation>
                <a href="/">Home</a>
                    <a href="/">About me</a>
                    <a href="/">Resume</a>
                    <a href="/">Contact</a>
                </Navigation>
            </Drawer>
            <Content />
        </Layout>
    </div>
    )
}

export default Navbar
