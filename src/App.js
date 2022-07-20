import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { setUser } from './state/actions/userAction';
import { getUserCollection } from './state/actions/collectionAction';

// Components
import Navbar from "./components/Navbar";

// Screens
import HomeScreen from "./screens/HomeScreen";
import Register from './screens/Register';
import Login from './screens/Login';
import SoftwarePage from './screens/SoftwarePage';
import TopSoftware from './screens/TopSoftware';
import Search from './screens/Search';
import CollectionPage from './screens/CollectionPage';
import ProfilePage from './screens/ProfilePage';

const App = () => {

  const dispatch = useDispatch()

  const user = useSelector(state => state.currentUser.user);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'))
    if(user) {
      console.log(user)
      dispatch(setUser(user))
      dispatch(getUserCollection(user.id))
    }
  },[])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          
           <Route path='/' element={<HomeScreen/>} />
           <Route path='/register' element={<Register />} />
           <Route path='/login' element={<Login />} />
           <Route path='/software/:id' element={<SoftwarePage />} />
           <Route path='/top-software' element={<TopSoftware />} />
           <Route path='/search/:slug' element={<Search />} />
           <Route path='/collections' element={<CollectionPage />} />
           <Route path='/profile' element={<ProfilePage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
