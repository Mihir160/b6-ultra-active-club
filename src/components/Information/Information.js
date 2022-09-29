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
            
        </div>
    );
};

export default Information;