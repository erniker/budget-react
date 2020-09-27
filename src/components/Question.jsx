import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Question = ({ setBudget, setRemain, setQuestion }) => {
  // Definir el Stage
  const [quantity, setQuantity] = useState(0);

  const [error, setError] = useState(false);

  // Handle Input
  const handleInput = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  // Submit
  const submitBudget = (e) => {
    e.preventDefault();

    // Validate
    if (quantity < 1 || isNaN(quantity)) {
      setError(true);
      return;
    }
    //if validate tre
    setError(false);
    setQuestion(false);
    setBudget(quantity);
    setRemain(quantity);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error message="El presupuesto es incorrecto" /> : null}

      <form onSubmit={submitBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={handleInput}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </>
  );
};

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRemain: PropTypes.func.isRequired,
  setQuestion: PropTypes.func.isRequired,
};

export default Question;
