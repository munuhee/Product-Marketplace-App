import React from 'react'
import Footer from './Footer'
import ResponsiveAppBar from './Navbar/AppNav'
function Layout({ children }) {
  return (
    <>
      <ResponsiveAppBar/>
        {children}
      {/* <Footer/> */}
    </>
  )
}

export default Layout