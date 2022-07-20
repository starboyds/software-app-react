import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {

  const navigate = useNavigate();

  const user = useSelector(state => state.currentUser.user);

  useEffect(() => {
    if(!user) {
      navigate(`/`);
    }
  })

  return (
    <div className='container'>
      <h2 className='mt-3'>Welcome {user ? user.username : ''},</h2>
      
    </div>
  )
}

export default ProfilePage