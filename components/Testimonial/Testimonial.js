import React, { useState } from 'react';
import Slider from "react-slick";

const testimonial = [
    {
        id: '01',
        tImg: 'images/testimonial/boy1.jpg',
        tTitle:'Amazing Experience.',
        Des: "I had an excellent experience using this project. All the tools and features were very easy to use and worked perfectly. I highly recommend trying it as it offers a professional and impressive experience.",
        Title: 'Cathi Falcon',
        Sub: "",
    },
    {
        id: '02',
        tImg: 'images/testimonial/boy2.jpg',
        tTitle:'Impressive for a Young Creator.',
        Des: "I was amazed by the quality and dedication shown, especially knowing the creator is just 16 years old. Everything works perfectly, and it feels very professional.",
        Title: 'Harry Abraham',
        Sub: "",
    },
    {
        id: '03',
        tImg: 'images/testimonial/girl1.png',
        tTitle:'Highly Recommended.',
        Des: "I loved exploring all the features. It’s clear that a lot of effort went into making it user-friendly and efficient. Definitely worth trying.",
        Title: 'Emma Carter',
        Sub: "",
    },
    {
        id: '04',
        tImg: 'images/testimonial/girl2.png',
        tTitle:'Creative and Practical.',
        Des: "The project combines creativity with functionality. It’s easy to navigate, and the results are exactly as expected. A truly impressive outcome.",
        Title: 'Sophia Brown',
        Sub: "",
    },
    {
        id: '05',
        tImg: 'images/testimonial/girl3.png',
        tTitle:'Seamless Experience.',
        Des: "Everything runs smoothly, and the interface is clear and simple. It’s refreshing to see such attention to detail and quality.",
        Title: 'Lily Johnson',
        Sub: "",
    },
    {
        id: '06',
        tImg: 'images/testimonial/boy3.jpg',
        tTitle:'Smooth and Effective.',
        Des: "The tools are easy to use, and the results are outstanding. I enjoyed working with this project and would definitely recommend it to others.",
        Title: 'Benjir Walton',
        Sub: "",
    },
]

const Testimonial = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className="wpo-testimonial-section section-padding">
            <div className="container">
                <div className="wpo-testimonial-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="testimonial-left">
                                <div className="testimonial-left-inner">
                                    <div className="slider-for">
                                        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={false} arrows={false} fade={true}>
                                            {
                                                testimonial.map((tesmnl, tsm) => (
                                                    <div className="testimonial-img" key={tsm}>
                                                        <img src={tesmnl.tImg} alt="" />
                                                    </div>
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                    <div className="side-img-1"><img src='images/testimonial/boy1.jpg' alt="" /></div>
                                    <div className="side-img-2"><img src='images/testimonial/boy2.jpg' alt="" /></div>
                                    <div className="side-img-3"><img src='images/testimonial/girl1.png' alt="" /></div>
                                    <div className="side-img-4"><img src='images/testimonial/girl2.png' alt="" /></div>
                                    <div className="side-img-5"><img src='images/testimonial/boy3.jpg' alt="" /></div>
                                    <div className="border-s1"></div>
                                    <div className="border-s2"></div>
                                    <div className="border-s3"></div>
                                </div>
                                <div className="shape-t">
                                    <svg width="750" height="750" viewBox="0 0 750 750" fill="none">
                                        <g filter="url(#filter0_f_39_4154)">
                                            <circle r="125" transform="matrix(-1 0 0 1 375 375)" fillOpacity="0.4" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_39_4154" x="0" y="0" width="750" height="750"
                                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                    result="shape" />
                                                <feGaussianBlur stdDeviation="125"
                                                    result="effect1_foregroundBlur_39_4154" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="wpo-testimonial-items">
                                <div className="slider-nav">
                                    <Slider
                                        asNavFor={nav1}
                                        ref={(slider2) => setNav2(slider2)}
                                        slidesToShow={1}
                                        dots={true}
                                        swipeToSlide={true}
                                        focusOnSelect={true}
                                    >
                                        {
                                            testimonial.map((tesmnl, tsm) => (
                                                <div className="wpo-testimonial-item" key={tsm}>
                                                    <div className="wpo-testimonial-text">
                                                        <h4>{tesmnl.tTitle}</h4>
                                                        <p>{tesmnl.Des}</p>
                                                        <div className="wpo-testimonial-text-btm">
                                                            <h3>{tesmnl.Title}, <span>{tesmnl.Sub}</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </Slider>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="left-shape"></div>
            <div className="right-shape"><img src="images/testimonial/shape.png" alt="" /></div>
        </section>
    );
}

export default Testimonial;