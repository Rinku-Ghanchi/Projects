import React from 'react'
import { NavLink } from 'react-router-dom'

function ANavs({ title, name }) {
    return (
        <div>
            {/* Modal Search Start */}
            <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h4 className="modal-title text-secondary mb-0" id="exampleModalLabel">Search by keyword</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body d-flex align-items-center">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Search End */}

            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">{title}</h3>
                    <ol className="breadcrumb justify-content-center text-white mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><NavLink to="/dashborad" className="text-white">Home</NavLink></li>
                        <li className="breadcrumb-item"><a href="#" className="text-white">Pages</a></li>
                        <li className="breadcrumb-item active text-secondary">{name}</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}
        </div>
    )
}

export default ANavs
