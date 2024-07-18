import { Button, Container, Grid } from '@mui/material';
import React, { Fragment } from 'react';
import '../../../assets/css/crafted.css';
import ice1 from '../../../assets/images/w1.jpg'
import ice2 from '../../../assets/images/w7.jpg'
import ice3 from '../../../assets/images/w3.jpg'
import ice4 from '../../../assets/images/w4.jpg'
import ice5 from '../../../assets/images/w5.jpg'
import ice6 from '../../../assets/images/w6.jpg'
import ice7 from '../../../assets/images/fr.18.jpg'
import ice8 from '../../../assets/images/fr.19.jpg'
import ice9 from '../../../assets/images/fr.17.jpg'

const Crafted = () => {
  return (
    <Fragment>
      <div className="craft-craft">
        <div className='crafted-container'>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <div className='crafted-text'>
                <h3>Crafted with <br />excellent material.</h3>
                <p>Donec vitae odio quis nisl dapibus malesuada.
                Nullam ac aliquet velit. Aliquam vulputate velit
                imperdiet dolor tempor tristique.
                </p>
                <Button variant='contained' color='warning' sx={{textTransform:"none"}}>Explore More</Button>
              </div>
            </Grid>
            <Grid item xs={12} md={8} >
              <div >
              <div className='crafted-images'>
                <img src={ice1} alt="Material 1" className='crafted-images-img' />
                <img src={ice2} alt="Material 2" className='crafted-images-img' />
                <img src={ice3} alt="Material 3" className='crafted-images-img' />
                <img src={ice4} alt="Material 3" className='crafted-images-img' />
                <img src={ice5} alt="Material 3" className='crafted-images-img' />
                <img src={ice6} alt="Material 3" className='crafted-images-img' />
              </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

    </Fragment >
  );
}

export default Crafted;
