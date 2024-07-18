import React, { Fragment, useState } from 'react';
import { IconButton, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Slide, TextField, Divider } from '@mui/material';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import axios from 'axios';
// import 'E:/app/myproject/src/assets/css/dialogbox.css'; 
import '../assets/css/dialogbox.css'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const schema = yup.object().shape({
    UserName: yup.string().required("UserName is Required"),
    Password: yup.string()
        .min(5, 'Password must be at least 5 characters long')
        .max(10, 'Password cannot be longer than 10 characters')
        .required("Password is Required"),
}).required();

const DialogBox = ({ onLogin }) => {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            await axios.post('http://localhost:3005/Login-list', data, {
                headers: { 'Content-Type': 'application/json' }
            });
            localStorage.setItem('username', data.UserName);
            onLogin(data.UserName); // Pass username to parent component
            reset();
            handleClose();
        } catch (err) {
            alert("Error during login");
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <IconButton onClick={handleClickOpen} sx={{ p: 0, mx: 1 }}>
                <div className="navbar-link">Login</div>
            </IconButton>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                className="dialog-container"
            >
                <DialogTitle className="dialog-title">
                    <h1>{"Login"}</h1>
                </DialogTitle>
                <DialogContent className="dialog-content">
                    <DialogContentText id="alert-dialog-slide-description" className="dialog-content-text">
                        Please enter your login details below.
                    </DialogContentText>
                    <Divider />
                    <form onSubmit={handleSubmit(onSubmit)} className="dialog-form">
                        <div className="pass">
                            <label>UserName</label>
                        </div>
                        <TextField
                            placeholder="Enter UserName"
                            {...register("UserName")}
                            error={!!errors.UserName}
                            helperText={errors.UserName?.message}
                            className="MuiTextField-root"
                        />
                        <div className="pass">
                            <label>Password</label>
                        </div>
                        <TextField
                            type="password"
                            placeholder="Enter Password"
                            {...register("Password")}
                            error={!!errors.Password}
                            helperText={errors.Password?.message}
                            className="MuiTextField-root"
                        />
                        <div className="pass">
                            <Button variant="contained" type="submit" className="MuiButton-contained">Login</Button><br/>
                            <Link to="">Create Account</Link>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </Fragment>
    );
};

export default DialogBox;
