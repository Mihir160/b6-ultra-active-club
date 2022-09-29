import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

import './Activities.css'
import Information from '../Information/Information';
import Question from '../Question/Question';

const Activites = () => {

    const [activities, setActivity] = useState([])
    const [timecalculte, setCalculate] = useState([])
    
    useEffect(()=>{
          fetch('activity.json')
          .then(res => res.json())
          .then(data => setActivity(data))
    },[])

const addtoTime = (props) =>{
    const newTime = [...timecalculte, props]
    setCalculate(newTime)

}

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
                        activities.map(activity => <Activity activity={activity} key={activity.id} addtoTime={addtoTime}></Activity>)
                    }
                    </div>
                    <div className=''>
                        <Question></Question>
                    </div>
                   
               </div>
                <div className='information'>
                    <Information timecalculte={timecalculte}></Information>
                </div>
               
              
        </div>
    );
};

export default Activites;
