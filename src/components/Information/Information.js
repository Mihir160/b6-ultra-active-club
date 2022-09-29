import React from 'react';
import './Information.css'
import logo from './profilepic.jpg'
const Information = () => {
    return (
        <div className='detail'>
            <div className='info'>
                <img  className='info-img' src={logo} alt="" />
                 <p className='perosnal-info'>Mihir Roy <br /> <small>Dinajpur, Bangladesh</small> </p>   
            </div>
            <div className='hight-weight'>
              <p className='perosnal-info'>85kg <br /> <small>Weight</small> </p> 
              <p className='perosnal-info'>6.5 <br /> <small>Height</small> </p> 
              <p className='perosnal-info'>25yrs <br /> <small>Age</small> </p> 
            </div>
            <div>
            <p className='perosnal-info'>Add A Break </p> 
            <div className='break-time'>
                <button className='btn-break'>20 <small>s</small></button>
                <button className='btn-break'>10 <small>s</small></button>
                <button className='btn-break'>30 <small>s</small></button>
                <button className='btn-break'>40 <small>s</small></button>
                <button className='btn-break'>50 <small>s</small></button>
                <button className='btn-break'>60 <small>s</small></button>
            </div>
            </div>
           
        </div>
    );
};

export default Information;