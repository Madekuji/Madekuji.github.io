import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About.jsx'
import Work from './Work'

function App() {

  return (
    <Router>
      <Navbar />
      <div id="bodyDiv">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App;
