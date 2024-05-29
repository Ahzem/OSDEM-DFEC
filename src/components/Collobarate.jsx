import { Fragment } from 'react';
import '../css/Collobarate.css';
import minhath from '../assets/logo/minhath-logo.png';
import osdem from '../assets/logo/osdem-logo.png';

export const Collobarate = () => {
  return (
    <Fragment>
        <section id="coloboration" className="section1">
            <h2 className="section-title1" data-aos="fade-up">COLLABORATE WITH</h2>
                <div className="collaboration-grid">
                    <div className="collaboration-item" data-aos="fade-right">
                        <img src={osdem} alt="OSDEM Logo" />
                        <p>Organization for Social Development, Empowerment & Mercy</p>
                    </div>
                    <div className="collaboration-item" data-aos="fade-left">
                        <img src={minhath} alt="DFEC Logo" />
                        <p>MR/Minhath National School, Dickwella</p>
                    </div>
                </div>
        </section>
    </Fragment>
  )
}
