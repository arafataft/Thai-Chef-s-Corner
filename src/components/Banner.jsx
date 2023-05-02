/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Carousel, Image } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    {/* https://img.freepik.com/premium-photo/white-felt-texture-background_469558-4790.jpg?w=740 */}
                    <div style={{ backgroundImage: "url('https://thehbhouse.com/application/views/themes/theme-1/assets/content/kindergarten/images/home_kindergarten_section_bg2.png')", height: '90vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <Image className='mt-2' src="chef1.jpg" alt="Slide 1" height={500} />
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <div>
                                    <h1 className="mb-3">Welcome To Thai Chef</h1>
                                    <p className="mb-4 text-secondary">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                                    <Button variant="primary">Contact Us</Button>
                                    </div>
                                </div>
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
                                    <h1 className="mb-3">Welcome To Thai Chef </h1>
                                    <p className="mb-4 text-secondary">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                                    <Button variant="primary">Contact Us</Button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <Image className='mt-2' src="chef1.jpg" alt="Slide 1" height={500} />
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