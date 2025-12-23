import React, { useEffect, useState } from 'react'
import AHeader from '../Acoman/AHeader'
import ANavs from '../Acoman/ANavs'
import axios from 'axios'

function WorldWideBranch() {

    const [branches, setbranches] = useState([])

    useEffect(() => {
        getBranchehData()
    }, [])
    const getBranchehData = async () => {
        const res = await axios.get("http://localhost:3000/worldwide")
        // console.log(res.data)
        setbranches(res.data)
    }
        const [branch, setsinglebranch] = useState([])

        const branchData = async(id) => {
            const res = await axios.get(`http://localhost:3000/worldwide/${id}`)
            // console.log(res.data)
            setsinglebranch(res.data)
        }

    return (
        <div>
            <AHeader />

            <ANavs title="World Wide Branches" name="Branches" />
            <h3 className='text-center my-3'>This is World Wide Branches  </h3>
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr cla>
                            <th>ID</th>
                            <th>Countries</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            branches && branches.map((value, index) => {
                                console.log(value)

                                return (
                                    <tr>
                                        <td className='h6'>{value.id}</td>
                                        <td className='h6'>{value.title}</td>
                                        <td>
                                            <img src={value.image} style={{ width: "150px", height: "100px" }} alt="" />
                                        </td>
                                        <td className='h6'>{value.email}</td>
                                        <td className='h6'>{value.phone}</td>
                                        <td className='h6'>{value.address.slice(0, 20)} ...</td>
                                        <td>
                                            <button className='btn btn-danger p-2 mx-1'data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=> branchData(value.id)}>View</button>
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
        
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">World Wide Branches</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                        <div className='card' style={{ width: "100%", height: "600px" }}>
                                          <img src={branch.image} style={{ height: "380px"}} alt="" />
                                          <div className='card-body'>
                                            <h5 className='card-title'>{branch.id}</h5>
                                            <h5 className='card-title text-danger'>{branch.title}</h5>
                                            <h5 className='card-title text-success'>{branch.email}</h5>
                                             <h5 className='card-title'>{branch.phone}</h5>
                                              <h6 className='card-title text-success'>{branch.address}</h6>
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

export default WorldWideBranch
