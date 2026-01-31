import './index.scss'
import Sidebar from './../sidebar/index'
import Footer from '../Footer'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
