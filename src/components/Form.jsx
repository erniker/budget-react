import React, { useState } from "react";
import shortid from "shortid";
import Error from "./Error";
import PropTypes from "prop-types";

const Form = ({ setExpense, upsetExpense }) => {
  const [expenseName, setExpenseName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  // Cuadno el usuario agrga un gasto
  const addExpense = (e) => {
    e.preventDefault();

    // Validate
    if (quantity < 1 || isNaN(quantity) || expenseName.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // construir el gasto
    const expense = {
      expenseName,
      quantity,
      id: shortid.generate(),
    };

    // pasar el gasto al componente principal
    setExpense(expense);
    upsetExpense(true);

    // Resetear el form
    setExpenseName("");
    setQuantity(0);
  };
  return (
    <form onSubmit={addExpense}>
      <h2>Agregar tus gastos aqui</h2>
      {error ? (
        <Error message="Ambos campos son obligatorios o presupuesto es incorrecto" />
      ) : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  upsetExpense: PropTypes.func.isRequired,
};

export default Form;
