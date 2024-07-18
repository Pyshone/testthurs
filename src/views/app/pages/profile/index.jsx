import React, { Fragment, useEffect, useState } from 'react';
import ProfileCard from '../../../../components/sections/profile/profileCard';



const getLoggedInUserId = async () => {
  return 1; 
};

const Profile = () => {
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const userId = await getLoggedInUserId();
      console.log('Fetched logged-in user ID:', userId); // Debug log
      setLoggedInUserId(userId);
    };

    fetchUserId();
  }, []);

  return (
    <Fragment>
      {loggedInUserId ? (
        <ProfileCard userId={loggedInUserId} />
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  );
};

export default Profile;
