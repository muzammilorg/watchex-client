import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'

const PageLayout = ({children}) => {
  return (
<>

<Navbar></Navbar>
{children}
<Footer></Footer>
</>  
)
}

export default PageLayout