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
        {code} {actualRate}
        {actualRate > yesterdayRate ? (
          <CaretUpOutlined style={{ color: "#52c41a" }} />
        ) : actualRate === yesterdayRate ? (
          <CoffeeOutlined style={{ color: "#f28c2c" }} />
        ) : (
          <CaretDownOutlined style={{ color: "#eb2f96" }} />
        )}
      </h3>
      <p>{currency}</p>
      <section className="last5">
        <div>
          {yesterdayRate} <br />
          <strong>{yesterdayEffectiveDate}</strong>
        </div>
        <div>
          {minusTwoDaysRate}
          <br />
          <strong>{minusTwoDaysEffectiveDate}</strong>
        </div>
        <div>
          {minusThreeDaysRate}
          <br />
          <strong>{minusThreeDaysEffectiveDate}</strong>
        </div>
        <div>
          {minusFourDaysRate}
          <br />
          <strong>{minusFourDaysEffectiveDate}</strong>
        </div>
      </section>
    </div>
  );
}

export default CurrencyCard;
