import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SoftwareRating from '../components/SoftwareRating';
import { addToCollection, removeFromCollection } from '../state/actions/collectionAction';

const SoftwarePage = () => {
    const [software, setSoftware] = useState({});
    const [isAdded, setIsAdded] = useState(false);

    const { id } = useParams();
    const dispatch = useDispatch();

    // states ***************
    const user = useSelector(state => state.currentUser.user);
    const collections = useSelector(state => state.userCollection.collections)

    // functions **************
    const fetchSoftware = async() => {
        const res = await fetch(`http://localhost:3001/api/softwares/${id}`)
        const data = await res.json();
        setSoftware(data.software);
    }

    const checkIfAdded = () => {
        for(let i=0; i<collections.length; i++){
            if(collections[i].softwareId == software._id) {
                return true;
            }
        }
        return false;
    }

    const addSoftware = () => {
        let data = {
            userId: user.id,
            softwareId: software._id
        }
        dispatch(addToCollection(data))
        setIsAdded(true);
    }

    const removeSoftware = () => {
        dispatch(removeFromCollection(software._id))
        setIsAdded(false)
    }

    // hooks *************
    useEffect(() => {
        fetchSoftware();
    },[])

    useEffect(() => {
        setIsAdded(checkIfAdded());
    });
    return (
        <div className='container'>
            <div className='card mt-4'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col'>
                            <h3>{software.name}</h3>
                            <img src={software.image_url} alt={software.name} className="img-thumbnail" />
                        </div>
                        <div className='col-md-8 pt-5'>
                            <p><strong>Description:</strong> {software.desc}</p>
                            <p><strong>Size:</strong> {software.size}MB</p>
                            <p><strong>Version:</strong> {software.version}</p>
                            <p><strong>Requirements:</strong> {software.requirements}</p>
                            <p><strong>Language:</strong> {software.language}</p>
                            <p><strong>Price:</strong> INR {software.price}</p>
                            {user ? <div>
                                {isAdded ? <button className='btn btn-success' onClick={() => removeSoftware()}>Remove From Collection</button> : ''}
                                {!isAdded ? <button className='btn btn-success' onClick={() => addSoftware()}>Add To Collection</button> : ''}
                            </div> : ''}
                            
                        </div>
                    </div>
                </div>
            </div>

            {user ? <SoftwareRating id={id} /> : ''}
        </div>
    )
}

export default SoftwarePage
