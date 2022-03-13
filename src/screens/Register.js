import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserCollection } from '../state/actions/collectionAction';
import { setUser } from '../state/actions/userAction';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = useSelector(state => state.currentUser.user);

    const dispatch = useDispatch();

    const registerUser = async(e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        }

        const res = await fetch(`http://localhost:3001/api/register`, requestOptions);
        const result = await res.json();
        
        if(result.error) {
            alert('There was some error while signing Up!!')
            return;
        }

        localStorage.setItem('user', JSON.stringify(result));
        dispatch(setUser(result))
        dispatch(getUserCollection((result.id)))
        setUsername('');
        setEmail('');
        setPassword('');
        alert(`User Created!`)
    }

    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className= 'col-md-10 offset-md-1'>
                    <div className='card'>
                        <div className='card-body p-3'>
                            <h4>Register</h4>
                            <form onSubmit={registerUser}>
                                <div>
                                    <label htmlFor='username'>username</label>
                                    <input type='text' className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} required />
                                </div>
                                <div>
                                    <label htmlFor='email'>email</label>
                                    <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div>
                                    <label htmlFor='password'>password</label>
                                    <input type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <button className='btn btn-primary mt-2'>Register User</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
