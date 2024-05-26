import { Fragment } from 'react';
import '../css/Collobarate.css';

export const Collobarate = () => {
  return (
    <Fragment>
        <section id="coloboration" className="section1">
            <h2 className="section-title1" data-aos="fade-up">COLLABORATE WITH</h2>
                <div className="collaboration-grid">
                    <div className="collaboration-item" data-aos="fade-right">
                        <img src="https://i.imghippo.com/files/Fd6qn1716716101.png" alt="OSDEM Logo" />
                        <p>Organization for Social Development, Empowerment & Mercy</p>
                    </div>
                    <div className="collaboration-item" data-aos="fade-left">
                        <img src="https://i.imghippo.com/files/kXUGQ1716716045.png" alt="DFEC Logo" />
                        <p>MR/Minhath National School, Dickwella</p>
                    </div>
                </div>
        </section>
    </Fragment>
  )
}
