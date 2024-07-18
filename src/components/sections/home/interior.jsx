import React, { Fragment } from 'react';
import ice from '../../../assets/images/fr.8.jpg';
import in1 from '../../../assets/images/fr.12.jpg';
import in2 from '../../../assets/images/fr.2.jpg';
import '../../../assets/css/interior.css';
import i1 from '../../../assets/images/fr.1.jpg'
import i2 from '../../../assets/images/fr.3.jpg'
import i3 from '../../../assets/images/fr.7.jpg'
import i4 from '../../../assets/images/fr.15.jpg'
import { Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Interior = () => {


    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <Fragment>
            <div className="interior">
                <Grid container className='interior-con' spacing={3}>
                    <Grid item xs={12} md={4}>
                        <div className="inletter">We Help You Make Modern <br />Interior Design</div>
                        <Box mt={2}>
                            <div className="p">
                                <li>
                                    Clean Lines and Minimalism: Emphasize clean, straight lines and minimal ornamentation in furniture, architecture, and decor. Consider sleek, uncluttered furniture pieces with simple and geometric shapes.
                                </li>
                                <li>
                                Art and Decor: Select modern art pieces and decor that complement the style of the space. Consider abstract art, sculptures, and unique decorative accents to add personality to the modern design.
                                </li>
                                <li>
                                Focus on Technology: Integrate smart home technology and modern gadgets seamlessly into the design. This can include smart lighting, automated window coverings, and integrated sound systems. 
                                </li>
                            </div>
                        </Box>
                        {/* <Box mt={2}>
                            <div className="p">
                                Donec facilisis quam ut purus rutrum lobortis. Donec
                                vitae odio quis nisl dapibus malesuada. Nullam ac
                                aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada
                            </div>
                        </Box> */}
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box className='interior'>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} >
                                    <div data-aos="fade-down">
                                        <img src={in1} alt="Ice" className='intee' />
                                    </div>
                                    <Box mt={2} data-aos="fade-right">
                                        <img src={in2} alt="Ice" className='inter' />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} data-aos="fade-left">
                                    <img src={ice} alt="Ice" className='inte' />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                </Grid>
            </div>
            <Grid item xs={12}>
                <div className="inter-last">
                    <Box className='interior-images'>
                        <div>
                            <img src={i1} alt="Material 1" className='interior-images-img' />
                            <h1>Nordic</h1>
                            <h1> Donec vitae odio</h1>
                            <Link>Read More</Link>
                        </div>
                        <div>
                            <img src={i2} alt="Material 1" className='interior-images-img' />
                            <h1>Nordic</h1>
                            <h1> Donec vitae odio</h1>
                            <Link>Read More</Link>
                        </div>
                        <div>
                            <img src={i3} alt="Material 1" className='interior-images-img' />
                            <h1>Nordic</h1>
                            <h1> Donec vitae odio</h1>
                            <Link>Read More</Link>
                        </div>
                        <div>
                            <img src={i4} alt="Material 1" className='interior-images-img' />
                            <h1>Nordic</h1>
                            <h1> Donec vitae odio</h1>
                            <Link>Read More</Link>
                        </div>
                    </Box>
                </div>
            </Grid>
        </Fragment>
    );
};

export default Interior;
