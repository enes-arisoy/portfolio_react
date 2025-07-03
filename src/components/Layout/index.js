import './index.scss'
import Sidebar from './../sidebar/index'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;body&gt; <br />
        </span>
      </div>
    </div>
  )
}

export default Layout
