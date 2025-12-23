import React, { useState } from 'react'
import AHeader from '../Acoman/AHeader'
import ANavs from '../Acoman/ANavs'
import FormDatad from './FormDatad'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function AddBranchesData() {

      const redirect = useNavigate()
  const [form, setBranchesData] = useState({
    id: "",
    title: "",
    image: "",
    email: "",
    phone: "",
    address: ""

  })

  // form handling
  const getchangeing = (e) => {
    setBranchesData({
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

      if (form.title == "" || form.image == "" || form.email == "" || form.phone == "" || form.address == "") {
        console.log("Please Requied this field")
        toast.error("Please Required this field...!")
        return false
      }
      const res = await axios.post(`http://localhost:3000/worldwide`, form)
      console.log(res.data)
      redirect("/branches")
      toast.success("Branch Add Successfully...!")
      setBranchesData({
        id: "",
        title: "",
        image: "",
        email: "",
        phone: "",
        address: ""
      })
    }
    catch (error) {
      console.log(" Api Data Not Found")

    }

  }
  return (
    <div>
      <AHeader />
      <ANavs title="Add Branches Data" name="Add Branches " />
      <div>
        <div className="col-lg-6 wow fadeInRight container" data-wow-delay="0.3">
          <h2 className='text-center my-4'>Add Branches Form</h2>

          <form onSubmit={submitData}>
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="form-floating">
                  <input type="text" value={form.title} name="title" onChange={getchangeing} className="form-control" id="name" placeholder="Your Name" />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-floating">
                  <input type="email" value={form.email} name="email" onChange={getchangeing} className="form-control" id="email" placeholder="Your Email" />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-floating">
                  <input type="phone" value={form.image} name='image' onChange={getchangeing} className="form-control" id="image" placeholder="Image" />
                  <label htmlFor="phone">Your Image</label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-floating">
                  <input type="phone" value={form.phone} name='phone' onChange={getchangeing} className="form-control" id="phone" placeholder="Phone" />
                  <label htmlFor="phone">Your Phone</label>
                </div>
              </div>

              <div className="col-12">
                <div className="form-floating">
                  <textarea value={form.address} name="address" onChange={getchangeing} className="form-control" placeholder="Leave a message here" id="message" style={{ height: 160 }} defaultValue={""} />
                  <label htmlFor="message">Address</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3">Add Branch</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default AddBranchesData
