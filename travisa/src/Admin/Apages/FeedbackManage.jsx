import React, { useEffect, useState } from 'react'
import AHeader from '../Acoman/AHeader'
import ANavs from '../Acoman/ANavs'
import axios from 'axios'

function FeedbackManage() {

    const [feedback, setfeedbackdata] = useState([])

    useEffect(() => {
        fetchFeedback()
    }, [])
    // view data
    const fetchFeedback = async () => {
        const res = await axios.get("http://localhost:3000/feedbak")
        // console.log(res.data)
        setfeedbackdata(res.data)

    }

        const [singleFeedback, setFeedback] = useState([])

        const clientfeedback = async(id) =>{
            const res = await axios.get(`http://localhost:3000/feedbak/${id}`)
            // console.log(res.data)
            setFeedback(res.data)
        }
    return (
        <div>
            <AHeader />
            <ANavs title="Client Feedback Manage" name="Feedback" />
            <h3 className='text-center my-3'>This is Client Feedback Manage</h3>
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Desgination</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            feedback && feedback.map((value, index) => {
                                console.log(value)

                                return (
                                    <tr>
                                        <td className='h6'>{value.id}</td>
                                        <td className='h6'>{value.name}</td>
                                        <td className='h6'>{value.designation}</td>
                                        <td>
                                            <img src={value.image} style={{ width: "150px", height: "120px" }} alt="" />
                                        </td>
                                        <td className='h6'>{value.desc.slice(0, 40)}...</td>
                                        <td className='h6 text-danger'>{value.rating}</td>
                                        <td>
                                            <button className='btn btn-danger p-2 mx-1' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=> clientfeedback(value.id)}>View</button>
                                            <button className='btn btn-success p-2 mx-1'>Edit</button>
                                            <button className='btn btn-dark p-2 mx-1'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <div>
                    {/* Button trigger modal */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Tourist Feedback</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                        <div className='card' style={{height:"720px"}}>
                                                    <img src={singleFeedback.image} style={{height:"350px"}} alt="" />
                                            <div className='card-body'>
                                                        <h5 className='text-primary'>{singleFeedback.id}</h5>
                                                        <h5 className='text-danger'>{singleFeedback.name}</h5>
                                                        <h5 className='text-danger'>{singleFeedback.designation}</h5>
                                                        <h6 className='text-success'>{singleFeedback.desc}</h6>
                                                        <h5 className='text-danger'>{singleFeedback.rating}</h5>
                                            </div>
                                        </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary"  data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FeedbackManage
