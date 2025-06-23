import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'


import GenAI from './Pages/AISolutions/GenAI/GenAI'
import AIAgent from './Pages/AISolutions/AIAgent/AIAgent'

function App() {

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-agent-development" element={<AIAgent/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
