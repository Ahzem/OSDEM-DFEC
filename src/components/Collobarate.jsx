import { Fragment } from 'react';
import '../css/Collobarate.css';
import minhathLogo from '../assets/logo/minhath-logo.png';
import osdemLogo from '../assets/logo/osdem-logo.png';

export const Collobarate = () => {
  return (
    <Fragment>
        <section id="coloboration" className="section1">
            <h2 className="section-title1">COLLABORATE WITH</h2>
                <div className="collaboration-grid">
                    <div className="collaboration-item">
                        <img src={osdemLogo} alt="OSDEM Logo" />
                        <p>Organization for Social Development, Empowerment & Mercy</p>
                    </div>
                    <div className="collaboration-item">
                        <img src={minhathLogo} alt="DFEC Logo" />
                        <p>MR/Minhath National School, Dickwella</p>
                    </div>
                </div>
        </section>
    </Fragment>
  )
}
