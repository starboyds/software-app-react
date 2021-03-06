import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserCollection } from '../state/actions/collectionAction';
import { setUser } from '../state/actions/userAction';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = useSelector(state => state.currentUser.user);

    const dispatch = useDispatch();

    const loginUser = async (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        }

        const res = await fetch(`/api/login`, requestOptions);
        const result = await res.json();
        
        if(result.error) {
            alert('There was some error while signing Up!!')
            return;
        }

        localStorage.setItem('user', JSON.stringify({email: result.email, username: result.username, id: result.id}));
        localStorage.setItem('x-access-token', result.token)
        dispatch(setUser(result))
        dispatch(getUserCollection(result.id))
        setEmail('');
        setPassword('');
        alert(`User Login!`)
    }

    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className= 'col-md-10 offset-md-1'>
                    <div className='card'>
                        <div className='card-body p-3'>
                            <h4>Login</h4>
                            <form onSubmit={loginUser}>
                                <div>
                                    <label htmlFor='email'>email</label>
                                    <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div>
                                    <label htmlFor='password'>password</label>
                                    <input type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <button className='btn btn-primary mt-2'>Login User</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
