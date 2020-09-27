import React from "react";
import { budgetReview } from "../helpers";
import PropTypes from "prop-types";

const BudgetControl = ({ budget, remain }) => {
  return (
    <>
      <div className="alert alert-primary">Presupuesto: € {budget}</div>
      <div className={budgetReview(budget, remain)}>Restante: € {remain}</div>
    </>
  );
};

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remain: PropTypes.number.isRequired,
};

export default BudgetControl;
