import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Information.css'
const Toast = () => {
    const showToastMessage = () => {
        toast.success('Congratulations !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    return (
        <div>
        <button className='activity-complete' onClick={showToastMessage}>Activity Completed</button>
        <ToastContainer />
        </div>
    );
};

export default Toast;