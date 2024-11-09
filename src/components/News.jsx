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
                    <div className='news-item'>
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FDFEC.DIKWELLA%2Fposts%2Fpfbid0wTp9qGpjbj4YT3MfLzQuP64BNcb5DBMP1ZwALGVSzKee3vTh1h1f37h9pXeHcR3Dl&show_text=true&width=500" scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        <div className="news-info">
                            <h3>University cut-off has been released!</h3>
                            <p>One of our outstanding students has been selected for Medicine, and many others have qualified ...</p>
                        </div>
                    </div>
                    <div className='news-item'>
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FDFEC.DIKWELLA%2Fposts%2Fpfbid0LCKtAreSJ6egZzVG49AS1rtPd8dee3Zxc8hFwwMcXfUvu1CLDXbgdkn4Wux1qkiel&show_text=true&width=500&preview=comet_preview" scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        <div className="news-info">
                            <h3>2023 A/L Batch Results Are Out!</h3>
                            <p>Our 2023 A/L batch has achieved excellent results. Congratulations to all the students!</p>
                        </div>
                    </div>
{/*                     <div className="news-item">
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FDFEC.DIKWELLA%2Fposts%2Fpfbid02Q5Hn1fM6MZDRwGFR4LNTSUK6WKTSWziB5RsJDoCEBY4pLgqUWpgwKcrpUK3DEgHwl&show_text=true&width=500&is_preview=true" scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        <div className="news-info">
                            <h3>2026 A/L Batch Applications Now Open</h3>
                            <p>Applications for the 2026 A/L batch are now open. Apply now to join our transformative educational program.</p>
                        </div>
                    </div> */}
                </div>
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0"></script>
        </section>
    </Fragment>
  )
}
