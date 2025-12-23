import React, { useEffect, useState } from 'react';
import Header from '../Coman/Header';
import Footer from '../Coman/Footer';
import Navs from '../Coman/Navs';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
function Services() {

    const [service, setservies] = useState([])
    const [countries, setcountriesdata] = useState([])

    useEffect(() => {
        getServices()
    }, [])

    const getServices = async () => {
        const res = await axios.get("http://localhost:3000/service")
        // console.log(res.data)
        setservies(res.data)
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    const fetchCountries = async () => {
        const res = await axios.get("http://localhost:3000/countries")
        // console.log(res.data)
        setcountriesdata(res.data)
    }
    return (

        <div>
            <Header />
            <Navs title="Our Services" name="Services" />
            <div>
                {/* Services Start */}
                <div className="container-fluid service overflow-hidden py-5">
                    <div className="container py-5">
                        <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="sub-style">
                                <h5 className="sub-title text-primary px-3">Visa Categories</h5>
                            </div>
                            <h1 className="display-5 mb-4">Enabling Your Immigration Successfully</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        </div>
                        <div className="row g-4">
                            {
                                service && service.map((value, index) => {
                                    console.log(value)
                                    return (
                                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="service-item" >
                                                <div className="service-inner">
                                                    <div className="service-img">
                                                        <img src={value.image} style={{ width: "150px", height: "300px" }} className="img-fluid w-100 rounded" alt="Image" />
                                                    </div>
                                                    <div className="service-title">
                                                        <div className="service-title-name">
                                                            <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                                                <a className="h4 text-white mb-0">{value.title}</a>
                                                            </div>
                                                            <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                                        </div>
                                                        <div className="service-content pb-4">
                                                            <a href="#"><h4 className="text-white mb-4 py-3">{value.title}</h4></a>
                                                            <div className="px-4">
                                                                <p className="mb-4">{value.desc}</p>
                                                                <a className="btn btn-primary border-secondary rounded-pill py-3 px-5" href="#">Explore More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                {/* Services End */}
                {/* Counter Facts Start */}
                <div className="container-fluid counter-facts py-5">
                    <div className="container py-5">
                        <div className="row g-4">
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-passport" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Visa Categories</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">31</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>+</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-users" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Team Members</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">377</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>+</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-user-check" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Visa Process</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">4.9</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>K</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-handshake" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Success Rates</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">98</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Counter Facts End */}
                {/* Countries We Offer Start */}
                <div className="container-fluid country overflow-hidden py-5">
                    <div className="container py-5">
                        <div className="section-title text-center wow fadeInUp" data-wow-delay="0.1s" style={{ marginBottom: 70 }}>
                            <div className="sub-style">
                                <h5 className="sub-title text-primary px-3">COUNTRIES WE OFFER</h5>
                            </div>
                            <h1 className="display-5 mb-4">Immigration &amp; visa services following Countries</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        </div>
                        <div className="row g-4 text-center">
                            {
                                countries && countries.map((value, index) => {
                                    console.log(value)

                                    return (
                                        <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="country-item">
                                                <div className="rounded overflow-hidden">
                                                    <img src={value.image} style={{ width: "150px", height: "300px" }} className="img-fluid w-100 rounded" alt="Image" />
                                                </div>
                                                <div className="country-flag">
                                                    <img src={value.logo} style={{ height: "100%", width: "100%", borderRadius: "50%" }} className="img-fluid rounded-circle" alt="Image" />
                                                </div>
                                                <div className="country-name">
                                                    <a href="#" className="text-white fs-4">{value.title}</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                            <div className="col-12">
                                <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">More Countries</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Countries We Offer End */}

            </div>

            <Footer />
        </div>
    )
}

export default Services
