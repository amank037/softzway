import Title from '../reusables/title/Title'
import './MetaARVRFrameworks2.css'

function MetaARVRFrameworks2() {
  return (
    <div className='mf-div'>
        <div className='mf-container'>
            <Title title="Key points"/>
            <div className="mf-content">
                <div className="mf-item animate-on-scroll" data-direction="right" data-delay="0.2">
                    <img src="https://www.luxoft.com/files/pages/2023/3D-AR-and-VR-development-services/3D-AR-and-VR-development-services-Technologies.svg" alt="" />
                    <h1>Technologies</h1>
                    <ul>
                        <li>Unity</li>
                        <li>MRTK</li>
                        <li>C#</li>
                        <li>C++</li>
                    </ul>
                </div>

                <div className="mf-item animate-on-scroll" data-direction="right" data-delay="0.4">
                    <img src="https://www.luxoft.com/files/pages/2023/3D-AR-and-VR-development-services/3D-AR-and-VR-development-services-SDKs.svg" alt="" />
                    <h1>SDKs</h1>
                    <ul>
                        <li>Unity VR</li>
                        <li>Open XR</li>
                        <li>Steam VR</li>
                        <li>Oculus VR</li>
                    </ul>
                </div>

                <div className="mf-item animate-on-scroll" data-direction="right" data-delay="0.6">
                    <img src="https://www.luxoft.com/files/pages/2023/3D-AR-and-VR-development-services/3D-AR-and-VR-development-services-Hardware.svg" alt="" />
                    <h1>Hardware</h1>
                    <ul>
                        <li>HTC Vive and Index </li>
                        <li>Google Cardboard </li>
                        <li>Android </li>
                        <li>iOS </li>
                        <li>HoloLens </li>
                        <li>Oculus </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MetaARVRFrameworks2