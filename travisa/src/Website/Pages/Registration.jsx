import React, { useState } from 'react'
import Header from '../Coman/Header'
import Navs from '../Coman/Navs'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';

function Registration() {

            const redirect = useNavigate()
    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""
    })

    const getchnageing = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            status: "unblock",
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const getsubmit = async (e) => {
        e.preventDefault()

        try {

            if (!form.email.trim() || !form.password.trim() || !form.name.trim()) {
                console.log("Please required data")
                toast.error("Please required data")
                return false
            }

            const res = await axios.post("http://localhost:3000/users", form)
            console.log(res.data)
            toast.success("Registration  successfully..")
            redirect("/login")
            setform({
                id: "",
                name: "",
                email: "",
                password: "",
                status: ""
            })

        } catch (error) {
            console.log("Api Data not Found..")
            toast.error("Api Data not Found")
        }
    }
    return (
        <div>
            <section className="vh-100 bg-image" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                        <form>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="text" value={form.name} name="name" onChange={getchnageing} id="form3Example1cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                            </div>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="email" value={form.email} name="email" onChange={getchnageing} id="form3Example3cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                            </div>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="password" value={form.password} name="password" onChange={getchnageing} id="form3Example4cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                            </div>
                                            {/* <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                                            </div> */}
                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
                                                <label className="form-check-label" htmlFor="form2Example3g">
                                                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-block btn-lg gradient-custom-4 text-body" onClick={getsubmit}>Register</button>
                                            </div>
                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}

export default Registration
