import { Avatar, Button, IconButton } from '@mui/material';
import React, { Fragment } from 'react';
import '../../../assets/css/contactTable.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';

const ContactTable = () => {
    return (
        <Fragment>
            <div className="contain">
            <div className='Tablehead'>
                <div className='table-child'>
                    <IconButton><LocationOnOutlinedIcon sx={{ width: 50, height: 50 ,color:"red"}}/></IconButton>
                    <p>43 Raymouth Rd. Baltimore,<br />London 3910</p>
                </div>
                <div className='table-child'>
                <IconButton>< AttachEmailOutlinedIcon sx={{ width: 40, height: 40 ,color:"green"}}/></IconButton>
                    <p>info@yourdomain.com</p>
                </div>
                <div className='table-child'>
                <IconButton>< ContactsOutlinedIcon sx={{ width: 40, height: 40 ,color:"blue"}}/></IconButton>

                    <p>+123 456 7890</p>
                </div>
            </div>
            <div className='Tableheadd'>
                <div className='table'>
                    <div className='tablechild'>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </div>
                    <div className='tablechild'>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </div>
                </div>
                <div className='table'>
                    <div className='eadd'>
                        <label>Email Address</label>
                        <input placeholder='Email Address' />
                    </div>
                </div>
                <div className='table'>
                    <div className='message'>
                        <label>Message</label>
                        <input placeholder='Message' />
                    </div>
                </div>
                <Button variant='contained' color='warning' sx={{textTransform:"none"}}>Submit</Button>
            </div>
            </div>
        </Fragment>
    );
}

export default ContactTable;
