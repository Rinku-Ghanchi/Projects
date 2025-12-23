import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function ProfileData() {

    const redirect = useNavigate()
    const [data, setformdata] = useState({
        name: "",
        email: "",
        password: "",
    })

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem("Uid")}`)
            // console.log(res.data)
            setformdata({
                name: res.data.name, 
                email: res.data.email,
                password: res.data.password
            });
        } catch (error) {
            console.log("Api Data not found", error)
        }
    }

     const getchangeing = (e) => {
            setformdata({
                ...data,
                [e.target.name]: e.target.value
            })
            console.log(data)
        }

        const onsubmitdata = async (e) => {
            //   do not refesh
            e.preventDefault();

            try {
                const res = await axios.patch(`http://localhost:3000/users/${localStorage.getItem("Uid")}`, data)
                console.log(res.data)
                // console.log(res.status)

                localStorage.setItem("Uname",data.name)
                toast.success("Profile update successfully...!");
                redirect("/")

            } catch (error) {
                console.log("Api data not found", error)
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
                                        <h2 className="text-uppercase text-center mb-5">Update Profile Data</h2>
                                        <form>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="text" value={data.name} name="name" onChange={getchangeing} id="form3Example1cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                            </div>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="email" value={data.email} name="email" onChange={getchangeing} id="form3Example3cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                            </div>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="password" value={data.password} name="password" onChange={getchangeing} id="form3Example4cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                            </div>
                                            {/* <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                                            </div> */}

                                            <div className="d-flex justify-content-center">
                                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={onsubmitdata}>Profile Update</button>
                                            </div>
                                            {/* <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p> */}
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

export default ProfileData
