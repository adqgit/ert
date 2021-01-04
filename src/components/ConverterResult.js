import React from "react";
import "./ConverterResult.css";
import { Input, Modal } from "antd";
import useClippy from "use-clippy";

const ConverterResult = ({
  calculatedDate,
  tradingDate,
  calculatedCurrency,
  calculatedAmount,
  rate,
  calculationResult,
}) => {
  console.log(calculatedAmount);
  const [clipboard, setClipboard] = useClippy();

  function success(copiedText) {
    Modal.success({
      content: "Skopiowano do schowka: " + copiedText,
    });
  }

  const handleCopyToClipboard = (e) => {
    setClipboard(e.target.value);
    success(e.target.value);
  };

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
        Znaleziona data: <strong>{tradingDate}</strong>
      </p>
      <p>
        Znaleziony kurs:<strong> {rate}</strong>
      </p>
      <p>
        Otrzymana kwota:
        <strong style={{ cursor: "pointer" }}>
          <Input
            suffix=" PLN"
            value={calculationResult}
            id="myInput"
            style={{ width: "120px" }}
            onClick={handleCopyToClipboard}
          />
        </strong>
      </p>
    </>
  );
};

export default ConverterResult;
