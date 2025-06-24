import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'

import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

import GenAI from './Pages/AISolutions/GenAI/GenAI'
import AIAgent from './Pages/AISolutions/AIAgent/AIAgent'
import LLM from './Pages/AISolutions/LLM/LLM'
import ML from './Pages/AISolutions/ML/ML'
import NLP from './Pages/AISolutions/NLP/NLP'
import PredAnalytics from './Pages/AISolutions/PredAnalytics/PredAnalytics'
import Chatbot from './Pages/AISolutions/Chatbot/Chatbot'
import CompVision from './Pages/AISolutions/CompVision/CompVision'

import AndroidDev from './Pages/MobileAppDevelopment/AndroidDev/AndroidDev'
import EnterpriseDev from './Pages/MobileAppDevelopment/EnterpriseDev/EnterpriseDev'
import IosDev from './Pages/MobileAppDevelopment/IosDev/IosDev'
import FlutterDev from './Pages/MobileAppDevelopment/FlutterDev/FlutterDev'
import IotAppDev from './Pages/MobileAppDevelopment/IotAppDev/IotAppDev'
import ReactNativeDev from './Pages/MobileAppDevelopment/ReactNativeDev/ReactNativeDev'
import SwiftDev from './Pages/MobileAppDevelopment/SwiftDev/SwiftDev'

import WebDev from './Pages/WebDev/WebDev.jsx'

import NFTDev from './Pages/BlockchainDevelopment/NFTDev/NFTDev'
import CardanoDev from './Pages/BlockchainDevelopment/CardanoDev/CardanoDev'
import CryptoExchangeDev from './Pages/BlockchainDevelopment/CryptoExchangeDev/CryptoExchangeDev'
import DAODev from './Pages/BlockchainDevelopment/DAODev/DAODev'
import EthereumDev from './Pages/BlockchainDevelopment/EthereumDev/EthereumDev'
import NFTMarketDev from './Pages/BlockchainDevelopment/NFTMarketDev/NFTMarketDev'
import SmartContractDev from './Pages/BlockchainDevelopment/SmartContractDev/SmartContractDev'
import SolanaDev from './Pages/BlockchainDevelopment/SolanaDev/SolanaDev'
import Web3Dev from './Pages/BlockchainDevelopment/Web3Dev/Web3Dev'


import ARVRDev from './Pages/MetaverseDevelopment/ARVRDev/ARVRDev.jsx'

import CustomSoftwareDev from './Pages/SoftwareDevelopment/CustomSoftwareDev/CustomSoftwareDev.jsx'
import IotSoftwareDev from './Pages/SoftwareDevelopment/IotSoftwareDev/IotSoftwareDev.jsx'
import MicroDev from './Pages/SoftwareDevelopment/MicroDev/MicroDev.jsx'
import ProductDev from './Pages/SoftwareDevelopment/ProductDev/ProductDev.jsx'
import ProtoDev from './Pages/SoftwareDevelopment/ProtoDev/ProtoDev.jsx'


function App() {

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-content">
          <ScrollToTop/>
          <Routes>
            {/* <Route path="/" element={}/> */}
            <Route path="/" element={<Home />} />

            <Route path="/ai-agent-development" element={<AIAgent/>}/>
            <Route path="/generative-ai-application-development" element={<GenAI/>}/>
            <Route path="/llm-development" element={<LLM/>}/>
            <Route path="/ml-development" element={<ML/>}/>
            <Route path="/nlp-development" element={<NLP/>}/>
            <Route path="/predictive-analytics" element={<PredAnalytics/>}/>
            <Route path="/chatbot-development" element={<Chatbot/>}/>
            <Route path="/computer-vision" element={<CompVision/>}/>

            <Route path="/android-app-development" element={<AndroidDev/>}/>
            <Route path="/enterprise-application-development" element={<EnterpriseDev/>}/>
            <Route path="/ios-app-development" element={<IosDev/>}/>
            <Route path="/flutter-app-development" element={<FlutterDev/>}/>
            <Route path="/iot-application-development" element={<IotAppDev/>}/>
            <Route path="/react-native-app-development" element={<ReactNativeDev/>}/>
            <Route path="/swift-app-development" element={<SwiftDev/>}/>

            <Route path="/web-application-development" element={<WebDev />}/>
            

            <Route path="/nft-development" element={<NFTDev/>}/>
            <Route path="/crypto-exchange-development" element={<CryptoExchangeDev />} />
            <Route path="/ethereum-development" element={<EthereumDev />} />
            <Route path="/smart-contract-development" element={<SmartContractDev />} />
            <Route path="/cardano-development" element={<CardanoDev />} />
            <Route path="/nft-development" element={<NFTDev />} />
            <Route path="/dao-development" element={<DAODev />} />
            <Route path="/web3-development" element={<Web3Dev />} />
            <Route path="/solana-development" element={<SolanaDev />} />
            <Route path="/nft-marketplace-development" element={<NFTMarketDev/>}/>


            <Route path="/ar-vr-development" element={<ARVRDev/>}/>


            <Route path="/custom-software-development" element={<CustomSoftwareDev/>}/>
            <Route path="/iot-development" element={<IotSoftwareDev />} />
            <Route path="/product-development" element={<ProductDev />} />
            <Route path="/prototype-development" element={<ProtoDev />} />
            <Route path="/microservices-development" element={<MicroDev/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
