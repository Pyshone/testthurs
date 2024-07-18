import { Button, Container } from '@mui/material';
import React, { Fragment } from 'react';
import '../../../assets/css/banner.css';

const Banner = ({title,tit}) => {
    return (
        <Fragment>
        <div className='banner-container'>
        {/* <Container> */}

            <div className="content">
                <div className="text">
                <h1>{title}</h1>
                    <h1>{tit}</h1>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet</p>
                    <p>velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                </div>
                <div className='buttons'>
                    <Button variant='contained' color='warning'sx={{textTransform:"none"}}>Shop More</Button>
                    <Button variant='contained' color='warning'sx={{textTransform:"none"}}>Explore</Button>
                </div>
            </div>
        {/* </Container> */}

        </div>
        </Fragment>
    );
}

export default Banner;
