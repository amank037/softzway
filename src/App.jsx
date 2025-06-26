import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import { useScrollAnimations } from './Hooks/useScrollAnimations.jsx'
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
import MetaverseGame from './Pages/MetaverseDevelopment/MetaverseGame/MetaverseGame.jsx'
import MetaverseNFT from './Pages/MetaverseDevelopment/MetaverseNFT/MetaverseNFT.jsx'

import CustomSoftwareDev from './Pages/SoftwareDevelopment/CustomSoftwareDev/CustomSoftwareDev.jsx'
import IotSoftwareDev from './Pages/SoftwareDevelopment/IotSoftwareDev/IotSoftwareDev.jsx'
import MicroDev from './Pages/SoftwareDevelopment/MicroDev/MicroDev.jsx'
import ProductDev from './Pages/SoftwareDevelopment/ProductDev/ProductDev.jsx'
import ProtoDev from './Pages/SoftwareDevelopment/ProtoDev/ProtoDev.jsx'

import HireIOS from './Pages/HireTalent/Mobile/IOS/HireIOS.jsx'
import HireAndroid from './Pages/HireTalent/Mobile/Android/HireAndroid.jsx'
import HireFlutter from './Pages/HireTalent/Mobile/Flutter/HireFlutter.jsx'
import HireIonic from './Pages/HireTalent/Mobile/Ionic/HireIonic.jsx'
import HireSwift from './Pages/HireTalent/Mobile/Swift/HireSwift.jsx'
import HireKotlin from './Pages/HireTalent/Mobile/Kotlin/HireKotlin.jsx'

import HireNode from './Pages/HireTalent/Backend/Node/HireNode.jsx'
import HireLaravel from './Pages/HireTalent/Backend/Laravel/HireLaravel.jsx'
import HirePHP from './Pages/HireTalent/Backend/PHP/HirePHP.jsx'
import HirePython from './Pages/HireTalent/Backend/Python/HirePython.jsx'
import HireDotNet from './Pages/HireTalent/Backend/DotNet/HireDotNet.jsx'

import HireAngular from './Pages/HireTalent/Frontend/Angular/HireAngular.jsx'
import HireHTML5 from './Pages/HireTalent/Frontend/HTML5/HireHTML5.jsx'
import HireReact from './Pages/HireTalent/Frontend/React/HireReact.jsx'
import HireVue from './Pages/HireTalent/Frontend/Vue/HireVue.jsx'

import HireDedicatedSoftware from './Pages/HireTalent/Software/Dedicated/HireDedicatedSoftware.jsx'
import HireCustomSoftware from './Pages/HireTalent/Software/CustomSoftware/HireCustomSoftware.jsx'
import HireMicroservices from './Pages/HireTalent/Software/Microservices/HireMicroservices.jsx'
import HirePrototypeSoftware from './Pages/HireTalent/Software/Prototype/HirePrototype.jsx'
import HireProductSoftware from './Pages/HireTalent/Software/Product/HireProduct.jsx'

import HireSalesforce from './Pages/HireTalent/Automation/Salesforce/HireSalesforce.jsx'
import HireServiceNow from './Pages/HireTalent/Automation/ServiceNow/HireServiceNow.jsx'
import HireZoho from './Pages/HireTalent/Automation/Zoho/HireZoho.jsx'

import HireFullStack from './Pages/HireTalent/Platforms/FullStack/HireFullStack.jsx'
import HireMEANStack from './Pages/HireTalent/Platforms/MEANStack/HireMEANStack.jsx'
import HireMERNStack from './Pages/HireTalent/Platforms/MERNStack/HireMERNStack.jsx'

import HireAI from './Pages/HireTalent/AI/HireAI.jsx'

import HireML from './Pages/HireTalent/ML/HireML.jsx'

import HireDS from './Pages/HireTalent/DS/HireDS.jsx'

import HireDevOps from './Pages/HireTalent/DevOps/HireDevOps.jsx'

import HireCloud from './Pages/HireTalent/Cloud/HireCloud.jsx'
import Contact from './Components/Contact/Contact.jsx'
import ContactUs from './Pages/ContactUs/ContactUs.jsx'


function App() {
  useScrollAnimations()

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.3
    });

    // lenis.on('scroll', (e) => {
    //   console.log(e);
    // });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (

      <div className="app">
        <Header />
        <div className="app-content">
          <ScrollToTop />
          <Routes>
            {/* <Route path="/" element={}/> */}
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs/>}/>

            <Route path="/ai-agent-development" element={<AIAgent />} />
            <Route path="/generative-ai-application-development" element={<GenAI />} />
            <Route path="/llm-development" element={<LLM />} />
            <Route path="/ml-development" element={<ML />} />
            <Route path="/nlp-development" element={<NLP />} />
            <Route path="/predictive-analytics" element={<PredAnalytics />} />
            <Route path="/chatbot-development" element={<Chatbot />} />
            <Route path="/computer-vision" element={<CompVision />} />

            <Route path="/android-app-development" element={<AndroidDev />} />
            <Route path="/enterprise-application-development" element={<EnterpriseDev />} />
            <Route path="/ios-app-development" element={<IosDev />} />
            <Route path="/flutter-app-development" element={<FlutterDev />} />
            <Route path="/iot-application-development" element={<IotAppDev />} />
            <Route path="/react-native-app-development" element={<ReactNativeDev />} />
            <Route path="/swift-app-development" element={<SwiftDev />} />

            <Route path="/web-application-development" element={<WebDev />} />


            <Route path="/nft-development" element={<NFTDev />} />
            <Route path="/crypto-exchange-development" element={<CryptoExchangeDev />} />
            <Route path="/ethereum-development" element={<EthereumDev />} />
            <Route path="/smart-contract-development" element={<SmartContractDev />} />
            <Route path="/cardano-development" element={<CardanoDev />} />
            <Route path="/nft-development" element={<NFTDev />} />
            <Route path="/dao-development" element={<DAODev />} />
            <Route path="/web3-development" element={<Web3Dev />} />
            <Route path="/solana-development" element={<SolanaDev />} />
            <Route path="/nft-marketplace-development" element={<NFTMarketDev />} />


            <Route path="/ar-vr-development" element={<ARVRDev />} />
            <Route path="/metaverse-game" element={<MetaverseGame />} />
            <Route path="/metaverse-nft" element={<MetaverseNFT />} />


            <Route path="/custom-software-development" element={<CustomSoftwareDev />} />
            <Route path="/iot-development" element={<IotSoftwareDev />} />
            <Route path="/product-development" element={<ProductDev />} />
            <Route path="/prototype-development" element={<ProtoDev />} />
            <Route path="/microservices-development" element={<MicroDev />} />


            <Route path="/angular-developer" element={<HireAngular />} />
            <Route path="/html5-developer" element={<HireHTML5 />} />
            <Route path="/reactjs-developer" element={<HireReact />} />
            <Route path="/vuejs-developer" element={<HireVue />} />

            <Route path="/nodejs-developer" element={<HireNode />} />
            <Route path="/laravel-developer" element={<HireLaravel />} />
            <Route path="/php-developer" element={<HirePHP />} />
            <Route path="/python-developer" element={<HirePython />} />
            <Route path="/dot-net-developer" element={<HireDotNet />} />

            <Route path="/custom-software-developer" element={<HireCustomSoftware/>}/>
            <Route path="/dedicated-developer" element={<HireDedicatedSoftware/>}/>
            <Route path="/microservices-developer" element={<HireMicroservices/>}/>
            <Route path="/product-developer" element={<HireProductSoftware/>}/>
            <Route path="/prototype-developer" element={<HirePrototypeSoftware/>}/>

            <Route path="/ios-developer" element={<HireIOS />} />
            <Route path="/android-developer" element={<HireAndroid />} />
            <Route path="/flutter-developer" element={<HireFlutter />} />
            <Route path="/ionic-developer" element={<HireIonic />} />
            <Route path="/swift-developer" element={<HireSwift />} />
            <Route path="/kotlin-developer" element={<HireKotlin />} />

            <Route path="/salesforce-developer" element={<HireSalesforce/>}/>
            <Route path="/servicenow-developer" element={<HireServiceNow/>}/>
            <Route path="/zoho-developer" element={<HireZoho/>}/>

            <Route path="/full-stack-developer" element={<HireFullStack/>}/>
            <Route path="/mean-stack-developer" element={<HireMEANStack/>}/>
            <Route path="/mern-stack-developer" element={<HireMERNStack/>}/>

            <Route path="/artificial-intelligence-developer" element={<HireAI/>}/>

            <Route path="/machine-learning-developer" element={<HireML/>}/>

            <Route path="/devops-developer" element={<HireDevOps/>}/>

            <Route path="/data-science-developer" element={<HireDS/>}/>

            <Route path="/cloud-developer" element={<HireCloud/>}/>

          </Routes>
        </div>
        <Footer />
      </div>

  )
}

export default App
