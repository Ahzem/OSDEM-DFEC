import { Fragment } from "react"
import map from '../assets/Dikwella.png'
import osdem from '../assets/osdem.png'
import wisdom from '../assets/wisdom.png'
import minhath from '../assets/minhath.png'
import railway from '../assets/railway.png'
import bus from '../assets/bus.png'
import mosque from '../assets/mosque.png'
import '../css/Location.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWalking, faSchool, faBus, faTrain, faMosque, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

export const Location = () => {
  return (
    <Fragment>
        <div id="location" className="section2">
            <img className="map" src={map} alt="location" />

            <div className="place-info-icon icon-dfec">
                <FontAwesomeIcon icon={faSchool} />
            </div>
                <div id="place-card" className="place-card card-dfec">
                    <div className="place-img">
                        <img src={osdem} alt="logo" />
                    </div>
                    <div className="place-info-div">
                        <h1>DFEC</h1>
                        <p>This is the hub of the OSDEM-DFEC Science Project and the boys' hostel, 
                            featuring separate self-learning facilities for a focused study environment.
                        </p>
                        <div className="place-distance">
                            <p><FontAwesomeIcon icon={faWalking} /> 0 min</p>
                            <p>0m</p>
                            <a href="https://maps.app.goo.gl/YKum1UCVDA33W2ch9" target="_blank">
                                <FontAwesomeIcon icon={faArrowAltCircleRight} /> 
                            </a>
                        </div>
                    </div>
                </div>

                <div className="place-info-icon icon-minhath">
                    <FontAwesomeIcon icon={faSchool} />
                </div>
                <div id="place-card" className="place-card card-minhath">
                    <div className="place-img">
                        <img src={minhath} alt="logo" />
                    </div>
                    <div className="place-info-div">
                        <h1>Minhath National School</h1>
                        <p>Morning classes are held at Minhath National School, 
                            conveniently located near both the boys' and girls' hostels, 
                            ensuring safety and ease of access for our students.
                        </p>
                        <div className="place-distance">
                            <p><FontAwesomeIcon icon={faWalking} /> 3 min</p>
                            <p>260m</p>
                            <a href="https://maps.app.goo.gl/u5HF6jhpsxfvSEEe7" target="_blank">
                                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="place-info-icon icon-bus">
                    <FontAwesomeIcon icon={faBus} />
                </div>
                <div id="place-card" className="place-card card-bus">
                    <div className="place-img">
                        <img src={bus} alt="logo" />
                    </div>
                    <div className="place-info-div">
                        <h1>Dikwella Bus Station</h1>
                        <p>Just 1 km from our facilities, the Dickwella Bus Station provides easy and convenient 
                            transport options. Both hostels are situated along the main road for straightforward commuting.
                        </p>
                        <div className="place-distance">
                            <p><FontAwesomeIcon icon={faWalking} /> 14 min</p>
                            <p>1km</p>
                            <a href="https://maps.app.goo.gl/HFfHsMrWtRfjVS6A8" target="_blank">
                                <FontAwesomeIcon icon={faArrowAltCircleRight} /> 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="place-info-icon icon-wisdom">
                    <FontAwesomeIcon icon={faSchool} />
                </div>
                <div id="place-card" className="place-card card-wisdom">
                    <div className="place-img">
                        <img src={wisdom} alt="logo" />
                    </div>
                    <div className="place-info-div">
                        <h1>WISDOM</h1>
                        <p>WISDOM offers a secure girls' hostel with CCTV protection and self-learning facilities. 
                            Afternoon classes for all students are conducted here in a safe environment.
                        </p>
                        <div className="place-distance">
                            <p><FontAwesomeIcon icon={faWalking} /> 3 min</p>
                            <p>270m</p>
                            <a href="https://maps.app.goo.gl/gAUDx7he7veFeSB18" target="_blank">
                                <FontAwesomeIcon icon={faArrowAltCircleRight} /> 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="place-info-icon icon-train">
                    <FontAwesomeIcon icon={faTrain} />
                </div>
                <div id="place-card" className="place-card card-train">
                    <div className="place-img">
                        <img src={railway} alt="Railway" />
                    </div>
                    <div className="place-info-div">
                        <h1>Wewurukannala Railway Station</h1>
                        <p>For those traveling by train, the Wewurukannala Railway Station is conveniently 
                            located near our DFEC and WISDOM.
                        </p>
                        <div className="place-distance">
                            <p><FontAwesomeIcon icon={faWalking} /> 13 min</p>
                            <p>950m</p>
                            <a href="https://maps.app.goo.gl/KhttB7SVtzwzqhmn9" target="_blank">
                                <FontAwesomeIcon icon={faArrowAltCircleRight} /> 
                            </a>
                        </div>
                    </div>
                </div>

                <div className="place-info-icon icon-mosque">
                    <FontAwesomeIcon icon={faMosque} />
                </div>
                <div id="place-card" className="place-card card-mosque">
                    <div className="place-img">
                        <img src={mosque} alt="mosque" />
                    </div>
                    <div className="place-info-div">
                        <h1>Muhaiyideen Jumma Mosque</h1>
                        <p>Boys can easily reach the Muhaiyideen Jumma Mosque, just 50 meters away, 
                            allowing them to stay connected with their spiritual practices.
                        </p>
                        <div className="place-distance">
                            <p><FontAwesomeIcon icon={faWalking} /> 1 min</p>
                            <p>50m</p>
                            <a href="https://maps.app.goo.gl/M4dGtVYuDpqq72BP8" target="_blank">
                                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    </Fragment>
  )
}
