import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

import './Activities.css'

const Activites = () => {

    const [activities, setActivity] = useState([])
    useEffect(()=>{
          fetch('activity.json')
          .then(res => res.json())
          .then(data => setActivity(data))
    },[])

    return (
        <div className='activities-container'>
            
               <div className='activities-header'>
                 <div className='activities-header-info'>
                 <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                 <h1>Fitness Palace</h1>
                 </div>
                 <div className='activitie-select' >
                    <h5>Select today’s exercise</h5>
                 </div>
                <div className='activities'>
                {
                    activities.map(activity => <Activity activity={activity} key={activity.id}></Activity>)
                 }
                </div>
               </div>
                <div>
                    
                </div>
        </div>
    );
};

export default Activites;
