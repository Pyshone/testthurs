import React, { Fragment } from 'react';
import ice from '../../../assets/images/fr.9.jpg';
import '../../../assets/css/choose.css';
import { Container, IconButton, Typography } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SupportIcon from '@mui/icons-material/Support';
import ScreenRotationAltOutlinedIcon from '@mui/icons-material/ScreenRotationAltOutlined';

const Choose = () => {
  return (
    <Fragment>
      <div className="choose-choose">
      <section className='choose-sec'>
        <div className='why-choose'>
        <Container>

          <img src={ice} alt="Ice" className='ice' style={{ position: "relative" }} />
          </Container>

        </div>
        <div >
        <Container>
          <h3>Why Choose Us</h3>
          <h5>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet  velit. Aliquam vulputate velit <br/>imperdiet dolor tempor tristique.
            </h5>
          <section style={{ display: "flex", flexDirection: "row", gap: '0.5rem' }}>
            <div className='text'>
              <IconButton><LocalShippingOutlinedIcon sx={{ width: 56, height: 56 }}/></IconButton>
              <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit <br/>imperdiet dolor tempor tristique.</p>
            </div>
            <div className='text'>
              <IconButton><ShoppingBagIcon sx={{ width: 56, height: 56 }}/></IconButton>
              <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit <br/>imperdiet dolor tempor tristique.</p>
            </div>
          </section>
          <section style={{ display: "flex", flexDirection: "row", gap: '0.5rem' }}>
          <div className='text'>
              <IconButton><SupportIcon sx={{ width: 56, height: 56 }}/></IconButton>
              <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit <br/>imperdiet dolor tempor tristique.</p>
            </div>
            <div className='text'>
            <IconButton>< ScreenRotationAltOutlinedIcon sx={{ width: 56, height: 56 }}/></IconButton>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit <br/>imperdiet dolor tempor tristique.</p>
            </div>
          </section>
          </Container>
        </div>
      </section>
      </div>
    </Fragment>
  );
}

export default Choose;
