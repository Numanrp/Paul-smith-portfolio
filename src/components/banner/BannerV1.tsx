import { Link } from 'react-router-dom';
import SocialShareV1 from '../social/SocialShareV1';
import homeimg from '../../assets/images/paulnayab.gif';
// import shape1 from "/assets/img/shape/1.png"
import shape3 from "/assets/img/shape/3.png"
import { ReactTyped } from 'react-typed';

const BannerV1 = () => {

    const textLines = [
        '<b className="">Digital Marketing</b>',
        '<b className="">Brand Development</b> Services </b>',
        '<b className="">Web Development </b> Services </b>',
        '<b className=""> Local SEO Services </b>',
        '<b className="">Social Media </b>',
        '<b className="">Custom Softwear </b>Developments </b>',
        '<b className="">Search Engine</b> Optimization</b>',


    ]

    return (
        <>
            <div className="banner-style-one-area bg-gray">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="banner-style-one-items">
                                <div className="info">
                                    <h1>Paul Smith </h1>
                                    <h2>
                                        <span className="header-caption" id="page-top">
                                            <span className="cd-headline clip is-full-width">
                                                <span className="cd-words-wrapper">
                                                    <ReactTyped
                                                        strings={textLines} typeSpeed={20} backSpeed={35} backDelay={2000} loop>
                                                    </ReactTyped>
                                                </span>
                                            </span>
                                        </span>
                                    </h2>
                                    <p>
                                        Experienced web developer with 8 years of expertise in front-end, back-end, SEO,
                                        and local SEO. Skilled in HTML, CSS, JavaScript, React.js, PHP, MySQL, Shopify,
                                        and eCommerce solutions. I create responsive,
                                        high-performance websites optimized for search engines and business growth.
                                    </p>
                                    <div className="flex-social mt-40">
                                        <div className="button">
                                            <Link className="btn-style-regular" to="/contact"><span>Hire Me Now</span> <i className="fas fa-arrow-right" /></Link>
                                        </div>
                                        <ul className="social-info">
                                            <SocialShareV1 />
                                        </ul>
                                    </div>
                                </div>
                                <div className="thumb">
                                    <img src={homeimg} alt="Image Not Found" />
                                    {/* <img src={shape1} alt="Image Not Found" /> */}
                                    <img src={shape3} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;