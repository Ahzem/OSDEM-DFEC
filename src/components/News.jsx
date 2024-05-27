import { Fragment } from 'react';
import '../css/News.css';

export const News = () => {
  return (
    <Fragment>
        <section id="latest-news" className="section" data-aos="fade-up">
            <h2 className="section-title">Latest News</h2>
                <div className="news-grid">
                    {/* <div className="news-item">
                        <iframe src="https://en.everybodywiki.com/OSDEM-DFEC_Science_Project" scrolling="on" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        <div className="news-info">
                            <h3>Now We Are on EverybodyWiki!</h3>
                            <p>We are proud to announce that our science project OSDEM has been featured on EverybodyWiki. Click <a href="https://en.everybodywiki.com/OSDEM-DFEC_Science_Project" target="_blank" rel="noreferrer"><b>here</b></a> to read more.</p>
                        </div>
                    </div> */}
                    <div className="news-item">
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FDFEC.DIKWELLA%2Fposts%2Fpfbid02Q5Hn1fM6MZDRwGFR4LNTSUK6WKTSWziB5RsJDoCEBY4pLgqUWpgwKcrpUK3DEgHwl&show_text=true&width=500&is_preview=true" scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        <div className="news-info">
                            <h3>2026 A/L Batch Applications Now Open</h3>
                            <p>Applications for the 2026 A/L batch are now open. Apply now to join our transformative educational program.</p>
                        </div>
                    </div>
                    <div className="news-item">
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FDFEC.DIKWELLA%2Fposts%2Fpfbid0ND4dgofVw4f3knZmCjkXT6dp1cfyR8pzso5Va3dwWPsQXhiajuM6t3eQuhPiHg5Ml&show_text=true&width=500&is_preview=true" scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        <div className="news-info">
                            <h3>2022(2023) University admissions with first waiting of our 3rd batch are out! </h3>
                            <p>Our 3rd batch of students have been admitted to universities. Congratulations to all the students!</p>
                        </div>
                    </div>
                </div>
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0"></script>
        </section>
    </Fragment>
  )
}
