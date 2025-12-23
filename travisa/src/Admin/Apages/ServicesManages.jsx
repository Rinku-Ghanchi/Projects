import React, { useEffect, useState } from 'react'
import AHeader from '../Acoman/AHeader'
import ANavs from '../Acoman/ANavs'
import axios from 'axios'
import { toast } from 'react-toastify'

function ServicesManages() {

    const [services, setservicedata] = useState([])

    useEffect(() => {
        getServices()
    }, [])

    // all services
    const getServices = async () => {
        const res = await axios.get("http://localhost:3000/service")
        // console.log(res.data)
        setservicedata(res.data)
    }

    const [singledata, setsingledata] = useState({
        id: "",
        title: "",
        image: "",
        desc: ""
    })

    const service = async (id) => {
        const res = await axios.get(`http://localhost:3000/service/${id}`)
        // console.log(res.data)
        setsingledata(res.data)
    }

    // delete service
        const deleteService = async(id) =>{
            const res = await axios.delete(`http://localhost:3000/service/${id}`)
            // console.log(res.data)
            toast.success("Service delete successfully...!")
            getServices()
        }

    return (
        <div>
            <AHeader />
            <ANavs title="Services Manage" name="Services" />
            <h3 className='text-center my-3'> This is Service Manager</h3>
            <div className='container'>
                <table className="table" >
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Image</th>
                            <th scope="col">Description</th>
                            <th scope="col">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services && services.map((value, index) => {
                                console.log(value)
                                return (
                                    <tr key={index}>
                                        <td className='h6'>{value.id}</td>
                                        <td className='h6'>{value.title}</td>
                                        <td>
                                            <img src={value.image} style={{ width: "150px", height: "100px" }} alt="" />
                                        </td>
                                        <td className='h6'>{value.desc.slice(0, 35)}...</td>
                                        <td>
                                            <button className='btn btn-danger p-2 mx-1' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => service(value.id)}>View</button>
                                            <button className='btn btn-success p-2 mx-1'>Edit</button>
                                            <button className='btn btn-dark p-2 mx-1' onClick={()=>deleteService(value.id) }>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                <div>
                    {/* Button trigger modal */}
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Visa Services</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className="card" style={{ width: "100%", height: "500px" }}>
                                        <img src={singledata.image} style={{ height: "275px" }} className="card-img-top" alt="..." />
                                        <div className='card-body'>
                                            <h5 className='card-title'>{singledata.id}</h5>
                                            <h5 className='card-title text-danger'>{singledata.title}</h5>
                                            <h6 className='card-title text-success' style={{ textAlign: "justify" }}>{singledata.desc}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">

                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ServicesManages
