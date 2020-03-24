import React from "react";
import './Navbar.css';
import { Content, Layout, Header, Drawer, Navigation } from  'react-mdl'

const Navbar = () => {
  return (
    <div style={{height: '100px', position: 'relative'}}>
      <Layout fixedHeader>
          <Header transparent>
            <Navigation className="Navbar">
                  <a href="/">Home</a>
                  <a href="/contact">Contact</a>
                  <a href="/portfolio">Portfolio</a>
            </Navigation>
          </Header>
          <Drawer>
              <Navigation className="Navbar-Drawer">
                  <a href="/">Home</a>
                  <a href="/contact">Contact</a>
                  <a href="/portfolio">Portfolio</a>
              </Navigation>
          </Drawer>
          <Content />
      </Layout>
  </div>
  )
}

export default Navbar;