import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';

const ProfileCard = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      fetchUser(userId);
    }
  }, [userId]);

  const fetchUser = async (id) => {
    try {
      console.log(`Fetching user data for ID: ${id}`); // Debug log
      const response = await axios.get(`http://localhost:3005/Login-list/${id}`);
      console.log('Fetched user data:', response.data);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <Fragment>
      <h1>Your Profile</h1>
      {user ? (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Avatar sx={{ height: 150, width: 150 }} />
                <Typography variant="h6" gutterBottom>
                  {user.UserName}
                </Typography>
                <Typography>
                  Password: {user.Password}
                </Typography>
                <Typography>
                  <Link href="#">Change Password</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Fragment>
  );
};

export default ProfileCard;
