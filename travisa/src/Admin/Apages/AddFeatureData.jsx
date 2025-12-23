import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import AHeader from '../Acoman/AHeader'
import ANavs from '../Acoman/ANavs'
function AddFeatureData() {

    const redirect = useNavigate()
    const [form, setFeatureData] = useState({
        id: "",
        title: "",
        logo: "",
        desc: ""
    })
    //  form handling

    const getchangeing = (e) => {
        setFeatureData({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }
    // Submit Api Data

    const submitData = async (e) => {
        e.preventDefault()

        try {

            if (form.title == "" || form.desc == "" || form.logo == "") {
                console.log("Please Requied this field")
                toast.error("Please Required this field...!")
                return false
            }
            const res = await axios.post(`http://localhost:3000/offer`, form)
            console.log(res.data)
            redirect("/features")
            toast.success("Service Add Successfully...!")
            setFeatureData({
                id: "",
                title: "",
                image: "",
                desc: ""
            })
        }
        catch (error) {
            console.log(" Api Data Not Found")

        }

    }
    return (
        <div>
            <AHeader />
            <ANavs title="Add Feature Data" name="Add Feature" />
            <h2 className='text-center my-3'>Add Feature Form</h2>
            <div className="col-lg-6 wow fadeInRight container" data-wow-delay="0.3">

                <form onSubmit={submitData}>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="form-floating">
                                <input type="text" value={form.title} name='title' onChange={getchangeing} className="form-control" id="name" placeholder="Your Name" />
                                <label htmlFor="name">Title</label>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-floating">
                                <input type="text" value={form.logo} name="logo" onChange={getchangeing} className="form-control" id="email" placeholder="Your Email" />
                                <label htmlFor="email">Your Image </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea value={form.desc} name='desc' onChange={getchangeing} className="form-control" placeholder="Leave a message here" id="message" style={{ height: 160 }} defaultValue={""} />
                                <label htmlFor="message">Message Descrition</label>
                            </div>
                        </div>
                        <div className="col-12 my-5">
                            <button className="btn btn-primary w-100 py-3">Add Feature</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddFeatureData
