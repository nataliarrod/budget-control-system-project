import React, {useState} from 'react';
import Error from './Error';

const Question = ({ setBudget, setRemain, setQuestion }) => {

  const [ quantity, setQuantity ] = useState(0);
  const [ error, setError ] = useState(false);

  const defineBudget = e => {
    setQuantity(Number(e.target.value, 10))
  }

  const addBudget = e => {
    e.preventDefault ();
    if(quantity < 1 || isNaN( quantity ) ) {
    setError(true);
    return;
    }
    setError(false);
    setBudget(quantity);
    setRemain(quantity);
    setQuestion(false);
  }

  return (  
    <>
      <h2>Expenses Control</h2>
      { error ? <Error message="Budget wrong" /> : null }

      <form
        onSubmit={addBudget}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Add your budget"
          onChange={defineBudget}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define your budget"
        />
      </form>
    </>

  );
}
 
export default Question;