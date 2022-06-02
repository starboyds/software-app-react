import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCollections } from '../state/actions/collectionAction';
import { removeUser } from '../state/actions/userAction';
import UserModal from './UserModal';

const Navbar = () => {
    const [searchText, setSearchText] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const user = useSelector(state => state.currentUser.user);
    const collections = useSelector(state => state.userCollection.collections);

    const logOut = () => {
        localStorage.removeItem('user');
        dispatch(removeUser())
        dispatch(removeCollections())
    }

    const submitSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${searchText}`);
        e.target.value = ''
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to='/'  style={{textDecoration: 'none'}}><span className="navbar-brand">Software Zone</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <form className="d-flex" onSubmit={submitSearch}>
                        <input className="form-control me-2" type="search" onChange={(e) => setSearchText(e.target.value)} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </ul>
                <ul className='navbar-nav'>
                        <li className="nav-item">
                        <Link to='/top-software'  style={{textDecoration: 'none'}}><span className="nav-link">Top Programs</span></Link>
                        </li>
                        {/* ************** modal button *************** */}
                        {!user ? 
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            User Login
                        </button> : ''}
                        <UserModal /> 

                        {/* ************** modal *************** */}
                        {user ? <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            User
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <Link to='/collections'  style={{textDecoration: 'none'}}>
                                    <span className="dropdown-item">Collections (<b>{collections.length}</b>)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/profile'  style={{textDecoration: 'none'}}>
                                    <span className="dropdown-item">Profile</span>
                                </Link>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" onClick={logOut}>Logout</a></li>
                        </ul>
                        </li> : ''}
                    </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar
