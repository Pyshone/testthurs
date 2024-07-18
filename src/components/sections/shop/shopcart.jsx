import React, { Fragment, useState } from 'react'
import '../../../assets/css/shopcart.css';
import { Button, Container, Divider, IconButton, Typography } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SupportIcon from '@mui/icons-material/Support';
import ScreenRotationAltOutlinedIcon from '@mui/icons-material/ScreenRotationAltOutlined';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { shoplist } from '../../../helpers/map';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../redux/reducer/cartSlice';

const Shopcart = (product) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const item = shoplist.find(item => item.id === parseInt(id));
    const dispatch = useDispatch();
    const [mainImage, setMainImage] = useState(item.image);

    const handleImageClick = (image) => {
        console.log('Image clicked:', image);
        setMainImage(image);
    };

    const handleAddToCart = () => {
        dispatch(addItemToCart({ ...item, quantity: 1 }));
        console.log(" Successfully Add item in your Cart")

    };

    // const handleBuyNow = () => {
    //     handleAddToCart();
    //     navigate(`/cart/${item.id}`);
    //   };

    return (
        <Fragment>
            <Divider />
            <div className="shop-choose-choose">
                <section className='shop-choose-sec'>
                    <div className='shop-why-choose'>
                        <Container>
                            <img src={item.image} alt="Ice" className='shop-ice' />
                            <p>Dimension:{item.dim}</p>
                            <Divider className='divider'></Divider>
                            {/* <div className='shop-ig-division'>
                                {item.thumbnails.map((thumbnail, index) => (
                                    <img
                                        key={index}
                                        src={thumbnail}
                                        alt={`Thumbnail ${index + 1}`}
                                        className='iccxe'
                                        onClick={() => handleImageClick(thumbnail)}
                                    />
                                ))}
                            </div> */}
                            {/* <div className='shop-ig-division'>
                                <img src={item.image} alt="Ice" className='iccxe' onClick={() => setMainImage(item.img)} />
                                <img src={item.image} alt="Ice" className='iccxe' onClick={() => setMainImage(item.image)} />
                                <img src={item.image} alt="Ice" className='iccxe' onClick={() => setMainImage(item.image)} />
                            </div> */}
                        </Container>

                    </div>
                    <div >
                        <Container>
                            <h3>{item.title}</h3>
                            <h3>₹{item.Amount}.00</h3>
                            <h5>Stylish interior of living room with design brown armchair, wooden bookcase, pendant lamp, carpet decor, picture frames and elegant personal accessories in modern retro home decor.
                            </h5>
                            <section style={{ display: "flex", flexDirection: "row", gap: '0.5rem' }}>
                                <div className='shop-text'>
                                    <Button variant='contained' color="secondary" onClick={() => handleAddToCart(item)}>Add to Cart</Button>
                                </div>
                                <div className='shop-text-btn'>
                                    <Button variant='contained' color='success' onClick={() => navigate(`/cart/${item.id}`)}>Buy Now</Button>
                                </div>
                            </section>
                            <Divider className='divider'></Divider>
                            <section style={{ display: "flex", flexDirection: "row", gap: '0.5rem' }}>
                                <div className='shop-text'>
                                    <h5>Reason to Choose Us</h5>
                                    <ul>
                                    <li> 100% money back warranty</li>
                                    <li>Fast delivery</li>
                                    <li>All products are the best quality</li>
                                    <li>24/7 support.</li>
                                    </ul>
                                </div>
                            </section>
                            <Button variant="contained" color="warning" component={Link} to="/shop" style={{ marginTop: '20px' }}>
                                Continue Shopping
                            </Button>
                        </Container>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default Shopcart
