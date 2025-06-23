import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'


import GenAI from './Pages/AISolutions/GenAI/GenAI'
import AIAgent from './Pages/AISolutions/AIAgent/AIAgent'
import LLM from './Pages/AISolutions/LLM/LLM'
import ML from './Pages/AISolutions/ML/ML'
import NLP from './Pages/AISolutions/NLP/NLP'
import PredAnalytics from './Pages/AISolutions/PredAnalytics/PredAnalytics'
import Chatbot from './Pages/AISolutions/Chatbot/Chatbot'
import CompVision from './Pages/AISolutions/CompVision/CompVision'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

function App() {

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-content">
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-agent-development" element={<AIAgent/>}/>
            <Route path="/generative-ai-application-development" element={<GenAI/>}/>
            <Route path="/llm-development" element={<LLM/>}/>
            <Route path="/ml-development" element={<ML/>}/>
            <Route path="/nlp-development" element={<NLP/>}/>
            <Route path="/predictive-analytics" element={<PredAnalytics/>}/>
            <Route path="/chatbot-development" element={<Chatbot/>}/>
            <Route path="/computer-vision" element={<CompVision/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
