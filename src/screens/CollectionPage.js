import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CollectionPage = () => {

  const navigate = useNavigate();
  
  const collections = useSelector(state => state.userCollection.collections);
  const user = useSelector(state => state.currentUser.user);

  useEffect(() => {
    if(!user) {
      navigate(`/`);
    }
  })

  return (
    <div className='container'>
      <h2 className='mt-3'>My Collection</h2>
      {
        collections.map((el) => {
          return <h4 key={el.product._id}>{el.product.name}</h4>
        })
      }
    </div>
  )
}

export default CollectionPage