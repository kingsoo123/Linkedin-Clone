import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { selectUser, login, logout  } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import LeftSideBar from './LeftSideBar';
import Login from './Login';
import SideBar from './SideBar';
import {auth} from './firebase'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL
        }))
      }else{
        dispatch(logout())
      }
    })
   
  },[])

  return ( 
    <div className="App">
      <Header/>
      {!user ? (<Login/>)
       :
       (
       <div className="app__body">
       <SideBar/>
       <Feed/>
       <LeftSideBar/>
     </div>
     )
       }
       </div>
  );
}

export default App;
