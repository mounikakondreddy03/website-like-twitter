import React from 'react';
import {signOut} from 'firebase/auth';
import auth from '../firebase.init';
import { Outlet} from 'react-router-dom';
import Widgets from './Widgets/Widgets';
import Sidebar from './Sidebar/Sidebar';
import { useAuthState } from 'react-firebase-hooks/auth';

const Home = () => {

    const user = useAuthState(auth)
    // console.log(user[0].email);
    

    const handleLogout = () =>{
        signOut(auth)
    }

    return (
        <div className='app'>
            <Sidebar handleLogout={ handleLogout } user={user} />
            <Outlet />
            <Widgets />
        </div>
    );
};

export default Home;