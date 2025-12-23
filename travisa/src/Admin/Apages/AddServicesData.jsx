import React, { useState } from 'react'
import AHeader from '../Acoman/AHeader'
import ANavs from '../Acoman/ANavs'
import { event } from 'jquery'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AddServicesData() {

  const redirect = useNavigate()
  const [form, setFormData] = useState({
    id: "",
    title: "",
    image: "",
    desc: ""
  })

  // form handling 

  const getchangeing = (e) => {
    setFormData({
      ...form,
      // new id

      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value
    })
    console.log(form)
  }

  // Submit Api Data

  const submitData = async (e) => {
    e.preventDefault()

    try {

      if (form.title == "" || form.desc == "" || form.image == "") {
        console.log("Please Requied this field")
         toast.error("Please required this field...!")
        return false
      }
      const res = await axios.post(`http://localhost:3000/service`, form)
      console.log(res.data)
      redirect("/servicesManage")
      toast.success("Service Add Successfully...!")
      setFormData({
        id: "",
        title: "",
        image: "",
        desc: ""
      })
    }
    catch (error) {
      console.log("Data Not Found")

    }

  }
  return (
    <div>
      <AHeader />
      <ANavs title="Add Services Data" name="Add Service" />

      <h2 className='text-center my-4'>Add Service Form</h2>
      <div className="col-lg-6 wow fadeInRight container" data-wow-delay="0.3">

        {/* <h4 className="display-5 mb-3">Add Service From</h4> */}

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
                <input type="text" value={form.image} name="image" onChange={getchangeing} className="form-control" id="email" placeholder="Your Email" />
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
              <button className="btn btn-primary w-100 py-3">Add Service</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddServicesData
