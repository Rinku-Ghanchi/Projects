import React, { useEffect, useState } from 'react'
import AHeader from '../Acoman/AHeader'
import ANavs from '../Acoman/ANavs'
import axios from 'axios'

function CountriesData() {
    const [countries, setcountriesdata] = useState([])

    useEffect(() => {
        fetchCountries()
    })
    const fetchCountries = async () => {
        const res = await axios.get("http://localhost:3000/countries")
        // console.log(res.data)
        setcountriesdata(res.data)
    }
    // view country data modal
    const [singlecountry, setsinglecountry] = useState([])

    const viewCountriesData = async (id) => {
        const res = await axios.get(`http://localhost:3000/countries/${id}`)
        // console.log(res.data)
        setsinglecountry(res.data)
    }

    return (
        <div>
            <AHeader />
            <ANavs title="Countries Data" name="Countries" />
            <h3 className='text-center my-3'>This is Countries Data Manage</h3>
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Countries</th>
                            <th scope="col">Flag</th>
                            <th scope="col">Image</th>
                            <th scope="col">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            countries && countries.map((value, index) => {
                                console.log(value)
                                return (
                                    <tr>
                                        <td className='h6'>{value.id}</td>
                                        <td className='h6'>{value.title}</td>
                                        <td>
                                            <img src={value.logo} style={{ width: "150px", height: "100px" }} alt="" />
                                        </td>
                                        <td>
                                            <img src={value.image} style={{ width: "150px", height: "100px" }} alt="" />
                                        </td>
                                        <td>
                                            <button className='btn btn-danger p-2 mx-1' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => viewCountriesData(value.id)}>View</button>
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
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Countries Data</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className='card' style={{height:"600px"}}>
                                            <img src={singlecountry.image} style={{height:"350px"}} alt="" />
                                        <div className='card-body'>
                                                <h5>{singlecountry.id}</h5>
                                                <h5 className='text-danger'>{singlecountry.title}</h5>
                                                <div className='card-title'>
                                                        <img src={singlecountry.logo} style={{width:"150px",height:"150px",borderRadius:"50%"}} alt="" />
                                                </div>
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

export default CountriesData
