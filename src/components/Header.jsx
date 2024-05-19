import { Fragment } from 'react'
import vdoMp4 from '../assets/video/videoplayback.mp4'
import vdoWebm from '../assets/video/videoplayback.webm'
import '../css/Header.css'

export const Header = () => {
  return (
    <Fragment>
      <div className="video-wrapper">
        <video
          className="video-background"
          id="bg-video"
          muted
          playsInline
          autoPlay
          loop
        >
          <source src={vdoWebm} type="video/webm" />
          <source src={vdoMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
        <header>
            <h1>OSDEM DFEC Science Project</h1>
            <p>Empowering Underprivileged Students Through Education</p>
            <div className="header-buttons">
                <div className="contribute-button">
                    <a href="#contribute" className="btn">Contribute Now</a>
                </div>
                <div className="latest-news-button">
                    <a href="#latest-news" className="btn">Latest News</a>
                </div>
            </div>
            {/* Learn more arrow */}
            <div id="mouse-scroll">
                <div className="mouse">
                    <div className="mouse-in"></div>
                </div>
                <div>
                    <span className="down-arrow-1"></span>
                    <span className="down-arrow-2"></span>
                    <span className="down-arrow-3"></span>
                </div>
            </div>
        </header>
    </Fragment>
  )
}
