import React, { useEffect, useState } from 'react'
import Header from '../Coman/Header'
import Navs from '../Coman/Navs'
import { toast } from 'react-toastify';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Login() {

    const redirect = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("Uid")) {
            redirect("/")
        }
    })
    const [form, setform] = useState({
        email: "",
        password: ""
    }, [])

    const getchnageing = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }
    const getsubmit = async (e) => {
        e.preventDefault()

        try {

            const { email, password } = form

            // empty data
            if (!email.trim() || !password.trim()) {
                console.log("Please required this field..!")
                toast.error("Please required this field..!")
                return false
            }

            const res = await axios.get(`http://localhost:3000/users?email=${email}`)
            console.log(res.data)

            // email not match
            if (res.data.length == 0) {
                console.log("Email does not match..!")
                toast.error("Email does not match..!")
                return false
            }

            // password match
            let user = res.data[0]
            console.log(user)

            // password does match
            if (user.password !== password) {
                console.log("password does not match..")
                toast.error("password does not match..")
                return false
            }
            // status match
            if (user.status == "block") {
                console.log("Account has been block..")
                toast.error("Account has been block..")
                return false
            }
            localStorage.setItem("Uid", user.id)
            localStorage.setItem("Uname", user.name)
            redirect("/")
            toast.success("Succesfully login..!")
            console.log("Successfully login...!")

        } catch (error) {
            console.log("api data not Found", error)
            toast.error("api data not found.")
        }
    }


    return (
        <div>
            {/* <Header /> */}
            {/* <Navs title="User Login" name="Login" /> */}
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>
                        <form action="">
                            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '550px' }}>
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                    <h2 className="fw-bold mb-2 text-light text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <MDBInput value={form.email} onChange={getchnageing} name="email" wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput value={form.password} onChange={getchnageing} name='password' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />

                                    <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                                    <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={getsubmit}>
                                        Login
                                    </MDBBtn>

                                    <div className='d-flex flex-row mt-3 mb-5'>
                                        <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                            <MDBIcon fab icon='facebook-f' size="lg" />
                                        </MDBBtn>

                                        <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                            <MDBIcon fab icon='twitter' size="lg" />
                                        </MDBBtn>

                                        <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                            <MDBIcon fab icon='google' size="lg" />
                                        </MDBBtn>
                                    </div>

                                    <div>
                                        <p className="mb-0">Don't have an account? <Link to="/register" class="text-white-50 fw-bold">Sign Up</Link></p>

                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </form>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>

        </div>
    )
}

export default Login
