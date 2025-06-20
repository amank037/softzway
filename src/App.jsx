import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'

function App() {

  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
