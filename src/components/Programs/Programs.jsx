import React from 'react';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import './Programs.css';

const Programs = () => {
  return (
    <div className='services'>
    

            <div className="container">
            
            
            <div className="pTitle">
            <h2 className="title">Programs</h2>
            </div>

            <div className="section-header">
           <h3 className="title">Our Training Programs</h3>
            <p className="text">3 Special Programs that we provide for those who want to
            have a healthy and ideal body.Choose according to your goals!  
           </p>


            </div>

            <div className="cards">

                    <div className="card-wrap"> 

                    

                        <div className="card">

                            <div className="card-content">

                            <DirectionsRunIcon className='round' style={ {width: '50px', 
                                            height:'50px'}}>star</DirectionsRunIcon>

                                <h2 className="title-sm">Cardio</h2>

                                <p className="text">
                                    We Offer affordable and reliabl cars ranging from 
                                    compact cars for urban driving to spacious SUVs for family road trips
                                </p>

                                 <a href="#" class="btn small">Learn More</a>  

                            </div>

                        </div>

                        <div className="card">

                          <div className="card-content">

                          <FitnessCenterIcon  className='round' style={ {width: '50px', 
                                            height:'50px'}}></FitnessCenterIcon> 

                              <h2 className="title-sm">Muscle Building</h2>

                            <p className="text">
                               We Offer affordable and reliabl cars ranging from 
                              compact cars for urban driving to spacious SUVs for family road trips
                            </p>

                         <a href="#" class="btn small">Learn More</a>  

                          </div>

                        </div>

                        <div className="card">

                          <div className="card-content">

                     

                          <SelfImprovementIcon className='round' style={ {width: '55px', 
                                            height:'55px'}
                                                
                                    }></SelfImprovementIcon>  
                         

                              <h2 className="title-sm">Strength and Yoga</h2>

                            <p className="text">
                               We Offer affordable and reliabl cars ranging from 
                              compact cars for urban driving to spacious SUVs for family road trips
                            </p>

                          <a href="#" class="btn small">Learn More</a>  

                          </div>

                        </div>




                    </div>





            </div>





                 </div>

             </div>


       )
}

export default Programs;
         







  
 