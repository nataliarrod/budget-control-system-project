import React from 'react';
import { reviewBudget } from '../helpers';

const ControlBudget = ({budget, remain}) => {
  return ( 
    <>
      <div className="alert alert-primary">
        Budget: ${budget}
      </div>
      <div className={reviewBudget(budget, remain)}>
        Remainig: ${remain}
      </div>
    </>

 );
}
 
export default ControlBudget;