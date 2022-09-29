import React, { useState } from 'react';
import './Information.css'
import logo from './profilepic.jpg'
const Information = (props) => {
    console.log(props)
    const [BreakTime, setbreakTime] = useState([])
    let totalTime = 0
    for(const duration of props.timecalculte){
        totalTime = totalTime + duration
        console.log(totalTime)
    }
   
    const breakTime = (props) =>{
        setbreakTime(props)
        localStorage.setItem('breakTime', props)
    }


    let breakTimecount = localStorage.getItem('breakTime')
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
                <button onClick={ ()=> breakTime(10)} className='btn-break'>10 <small>s</small></button>
                <button onClick={ ()=> breakTime(20)}  className='btn-break'>20 <small>s</small></button>
                <button onClick={ ()=> breakTime(30)}  className='btn-break'>30 <small>s</small></button>
                <button onClick={ ()=> breakTime(40)}  className='btn-break'>40 <small>s</small></button>
                <button onClick={ ()=> breakTime(50)}  className='btn-break'>50 <small>s</small></button>
                <button onClick={ ()=> breakTime(60)}  className='btn-break'>60 <small>s</small></button>
            </div>
            </div>
            <div>
            <p className='perosnal-info'>Exercise Details</p>
              <div>
                <p className="excricse-time">Exercise time: <small className='time'> {totalTime} </small> seconds</p>
              </div>
              <div>
              <p className="break-time">Break time: <small className='time'> {breakTimecount} </small> seconds</p>
              </div>
            </div>

               <div>
                  <button className='activity-complete'>Activity Completed</button>
               </div>

        </div>
    );
};

export default Information;