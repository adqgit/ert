import React from "react";
import "./ConverterResult.css";

const ConverterResult = ({
  calculatedDate,
  tradingDate,
  calculatedCurrency,
  calculatedAmount,
  rate,
  calculationResult,
}) => {
  console.log(calculatedAmount);
  return (
    <>
      <p>
        Wybrana data: <strong>{calculatedDate}</strong>
      </p>
      <p>
        Kwota:{" "}
        <strong>
          {calculatedAmount} {calculatedCurrency}
        </strong>
      </p>
      <p>
        Znaleziona data <strong>{tradingDate}</strong>
      </p>
      <p>
        Znaleziony kurs:<strong> {rate}</strong>
      </p>
      <p>
        Wynik kalkulacji: <strong>{calculationResult} PLN</strong>
      </p>
    </>
  );
};

export default ConverterResult;
