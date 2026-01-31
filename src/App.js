
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/index';
import Home from './components/Home/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Projects from './components/Projects/index';
import Skills from './components/Skills/index';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

