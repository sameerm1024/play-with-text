import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import Textbox from './components/Textbox.jsx'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {

  const [isDark, setDark] = useState(false)

  return (
    <>
    <Router>
      <Route path='/'>
        <Navbar name='PLAYwTEXT' dark={isDark} toggleDark={setDark}/>
      </Route>
      <Route path='/'>
        <Textbox dark={isDark}/>
      </Route>  
    </Router>
    </>
  )
}

export default App
