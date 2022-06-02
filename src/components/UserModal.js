import React, {useState} from 'react'
import Login from '../screens/Login'
import Register from '../screens/Register'

const UserModal = () => {
    const [modalClose, setModalClose] = useState(false)

    const closeModal = () => {
        setModalClose(true)
    }

    return (
        <>
           <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">SignUp/Login</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                {/* ************ Nav Tabs ************** */}
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" style={{color: 'Black', border: '1px solid black'}} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Register</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" style={{color: 'Black', border: '1px solid black', marginLeft: '10px'}} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Login</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <Register />
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <Login />
                        </div>
                    </div>
                {/* ************ Nav Tabs ************** */}
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={closeModal} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div> 
        </>
    )
}

export default UserModal
