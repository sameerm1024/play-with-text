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
} from "react-router-dom";

function App() {

  const [isDark, setDark] = useState(false)

  return (
    <Router>
      <Routes>
      <Route path="/"
        element={
          <>
          <Navbar name='PLAYwTEXT' dark={isDark} toggleDark={setDark}/>
          <Textbox dark={isDark}/>
          </>
        }
      />
      </Routes>  
    </Router>
  )
}

export default App
