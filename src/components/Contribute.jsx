import { Fragment } from "react"
import '../css/Contribute.css'

export const Contribute = () => {
  return (
    <Fragment>
        <section id="contribute" className="section4" data-aos="fade-up">
            <h2 className="section-title">Contribute Now</h2>
            <div className="contribute-div">
                <div className="contribute-info">
                    <p>Join us in our mission to provide quality education to underprivileged students. Your contributions can make a significant difference. Contact us for more information on how you can help.</p>
                    <p>Just fill out the form below and we will get back to you with more details on how you can contribute to the OSDEM-DFEC Science Project.</p>
                </div>
                <div className="contribute-form">
                    <form action="https://example.com/form-handler" method="POST">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <input type="tel" name="phone" placeholder="Your Mobile Number" required />
                        <button type="submit">Contribute</button>
                    </form>
                </div>
            </div>
        </section>
    </Fragment>
  )
}
