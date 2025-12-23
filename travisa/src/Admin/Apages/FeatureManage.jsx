import React, { use, useEffect, useState } from 'react'
import AHeader from '../Acoman/AHeader'
import ANavs from '../Acoman/ANavs'
import axios from 'axios'
import { toast } from 'react-toastify'

function FeatureManage() {
    const [feature, setfeaturedata] = useState([])

    useEffect(() => {
        getFeatures()
    }, [])
    const getFeatures = async () => {
        const res = await axios.get("http://localhost:3000/offer")
        // console.log(res.data)
        setfeaturedata(res.data)
    }
    // View feature data modal
    const [features, setsinglefeature] = useState([])
    const fetchFeature = async (id) => {
        const res = await axios.get(`http://localhost:3000/offer/${id}`)
        // console.log(res.data)
        setsinglefeature(res.data)
    }

    //  delete feature data
     
    const removeFeaturedata = async(id)=>{
        const res = await axios.delete(`http://localhost:3000/offer/${id}`)
        // console.log(res.data)
        toast.success("Feature delete successfully...!")
        getFeatures()
    }
    return (
        <div>
            <AHeader />
            <ANavs title="Our Feature Manage" name="Feature" />
            <h3 className='text-center my-3'>This is World Wide Offer Manage</h3>
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>title</th>
                            <th>Logo</th>
                            <th>Description</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            feature && feature.map((value, index) => {
                                console.log(value)
                                return (
                                    <tr key={index}>
                                        <td className='h6'>{value.id}</td>
                                        <td className='h6'>{value.title}</td>
                                        <td>
                                            <img src={value.logo} style={{ width: "120px", height: "100px" }} alt="" />
                                        </td>
                                        <td className='h6'>{value.desc.slice(0, 50)}...</td>
                                        <td>
                                            <button className='btn btn-danger p-2 mx-1' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=> fetchFeature(value.id)}>View</button>
                                            <button className='btn btn-success p-2 mx-1'>Edit</button>
                                            <button className='btn btn-dark p-2 mx-1' onClick={()=> removeFeaturedata(value.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </table>

                <div>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">World Wide Offers</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className='card'style={{height:"520px"}}>
                                                    <img src={features.logo} style={{height:"350px"}} alt="" />
                                                <div className='card-body'>
                                                        <h5>{features.id}</h5>
                                                        <h5 className='text-danger'>{features.title}</h5>
                                                        <h6 className='text-success'>{features.desc}</h6>
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

export default FeatureManage
