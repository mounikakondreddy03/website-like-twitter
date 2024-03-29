import React from 'react';
import MainPage from './mainPage/MainPage';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import '../Page.css';

const Profile = () => {

  const [user] = useAuthState(auth);

  return (
    <div className='profilePage'>
        <MainPage user = { user } />
    </div>
  );
};

export default Profile;
