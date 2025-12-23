import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../Website/Coman/Header'
import Footer from '../../Website/Coman/Footer'
import AHeader from '../Acoman/AHeader'
import ANavs from '../Acoman/ANavs'
import { toast } from 'react-toastify'

function TrainingManage() {

  const [training, settraining] = useState([])

  useEffect(() => {
    getTrainingdata()
  }, [])

  const getTrainingdata = async () => {
    const res = await axios.get("http://localhost:3000/training")
    // console.log(res.data)
    settraining(res.data)
  }
  const [simpletraning, setsingletraining] = useState([])

  const trainingdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/training/${id}`)
    // console.log(res.data)
    setsingletraining(res.data)
  }

  const removeTrainig = async(id) => {
    const res = await axios.delete(`http://localhost:3000/training/${id}`)
    // console.log(res.data)
    toast.success("Training delete successfully...!")
    getTrainingdata()

  }

  return (
    <div>
      <AHeader />

      <ANavs title="Teaining Manage" name="Training" />

      <h3 className='text-center my-3'>This is Training Data Manage</h3>
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Image</th>
              <th>Description</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {
              training && training.map((value, index) => {
                console.log(value)
                {
                  return (
                    <tr >
                      <td className='h6'>{value.id}</td>
                      <td className='h6'>{value.title}</td>
                      <td>
                        <img src={value.image} style={{ width: "150px", height: "100px" }} alt="" />
                      </td>
                      <td className='h6'>{value.desc.slice(0,50)}...</td>
                      <td>
                        <button className='btn btn-danger p-2 mx-1' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => trainingdata(value.id)}>View</button>
                        <button className='btn btn-success p-2 mx-1'>Edit</button>
                        <button className='btn btn-dark p-2 mx-1' onClick={()=> removeTrainig(value.id)}>Delete</button>
                      </td>
                    </tr>
                  )
                }
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
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Training Data</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <div className="card" style={{ width: "100%", height: "480px" }}>
                    <img src={simpletraning.image} style={{ height: "250px"}} alt="" />
                    <div className='card-body'>
                      <h5 className='card-title'>{simpletraning.id}</h5>
                       <h5 className='card-title text-danger'>{simpletraning.title}</h5>
                       <h6 className='card-title text-success' style={{textAlign:"justify"}}>{simpletraning.desc}</h6>
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

export default TrainingManage
