import React from 'react';
import './Activity.css'
const Activity = (props) => {
  const {name, about, age, time, picture} = props.activity
    console.log(props)
    return (
        <div className='activity'>
            <img  src={picture} alt="" /> 
            <div className='activity-info'>
            <p className='activity-name'>{name}</p>
            <p className='about'> {about}</p>
            <p>For Age :{age}</p>
            <p>Time required : {time}s</p>
            <div  className='btn-activity'>
            <button>Add to list</button>
            </div>
            </div>
          
        </div>
    );
};

export default Activity;