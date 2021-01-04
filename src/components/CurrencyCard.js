import React from "react";
import "./Ert.css";
import "./CurrencyCard.css";
import {
  CoffeeOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

function CurrencyCard({
  code,
  actualRate,
  currency,
  yesterdayRate,
  yesterdayEffectiveDate,
  minusTwoDaysRate,
  minusTwoDaysEffectiveDate,
  minusThreeDaysRate,
  minusThreeDaysEffectiveDate,
  minusFourDaysRate,
  minusFourDaysEffectiveDate,
  cssClass,
}) {
  return (
    <div className={cssClass}>
      <h3>
        {code} {actualRate.toFixed(4)}
        {actualRate > yesterdayRate ? (
          <CaretUpOutlined style={{ color: "#52c41a" }} />
        ) : actualRate === yesterdayRate ? (
          <CoffeeOutlined style={{ color: "#f28c2c" }} />
        ) : (
          <CaretDownOutlined style={{ color: "#eb2f96" }} />
        )}
      </h3>
      <p className=" d-none d-sm-block">{currency}</p>
      <div className="last5 d-none d-sm-block">Poprzednie dni (handlowe):</div>
      <section className="last5 d-none d-sm-block">
        <div>
          <strong> {yesterdayEffectiveDate}</strong>
          <br />
          {yesterdayRate.toFixed(2)}
        </div>
        <div>
          <strong>{minusTwoDaysEffectiveDate}</strong>
          <br />
          {minusTwoDaysRate.toFixed(2)}
        </div>
        <div>
          <strong>{minusThreeDaysEffectiveDate}</strong>
          <br />
          {minusThreeDaysRate.toFixed(2)}
        </div>
        <div>
          <strong>{minusFourDaysEffectiveDate}</strong>
          <br />
          {minusFourDaysRate.toFixed(2)}
        </div>
      </section>
    </div>
  );
}

export default CurrencyCard;
