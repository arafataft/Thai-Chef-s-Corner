/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Carousel, Image } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div style={{ backgroundImage: "url('https://img.freepik.com/free-photo/front-view-delicious-pancakes-with-fruits-berries-dark-surface-fruit-cake-dessert_140725-81894.jpg?')", height: '90vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <div className="text-center">
                                <h1 className="mb-3 text-light">Welcome To  Thai <span style={{ color: ' #00e68a' }} className=''> Chef's Corner</span></h1>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ backgroundImage: "url('https://thehbhouse.com/application/views/themes/theme-1/assets/content/kindergarten/images/home_kindergarten_section_bg2.png')", height: '90vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-center">
                                    <div>
                                        <h1 className="mb-3">Welcome To Thai Chef's Corner </h1>
                                        <p className="mb-4 text-secondary">A platform where you can find the best thai recipes and top chefs for your catering needs.</p>
                                        <Button variant="secondary">Contact Us</Button>
                                    </div>
                                </div>
                                <div className="col-md-6 p-1">
                                    <Image className='d-none d-md-block' src="https://source.unsplash.com/random/800x600/?Chef" alt="Slide 1" height={500} width={490} rounded />
                                    <Image className='d-md-none img-fluid' src="https://source.unsplash.com/random/800x600/?Chef" alt="Slide 1" height={500} width={490} rounded />
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;