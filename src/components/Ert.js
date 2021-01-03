import React from "react";
import "./Ert.css";
import CurrencyCard from "./CurrencyCard";
import {
  CoffeeOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

function Ert({ ert }) {
  return (
    <>
      {console.log("render ert")}
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,900"
        rel="stylesheet"
      />
      <div class="container">
        {/* <div class="row">
          <div class="col-md-4">
            <div class="card card-1 " onClick={() => console.log(ert)}>
              <h3>
                {ert[4].rates[1].code} {ert[4].rates[1].mid}
                {ert[4].rates[1].mid > ert[3].rates[1].mid ? (
                  <CaretUpOutlined style={{ color: "#52c41a" }} />
                ) : ert[4].rates[1].mid === ert[3].rates.mid ? (
                  <CoffeeOutlined style={{ color: "#f28c2c" }} />
                ) : (
                  <CaretDownOutlined style={{ color: "#eb2f96" }} />
                )}
              </h3>
              <p>{ert[4].rates[1].currency}</p>
              <section className="last5">
                <div>
                  {ert[3].rates[1].mid} <br />
                  <strong>{ert[3].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[2].rates[1].mid}
                  <br />
                  <strong>{ert[2].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[1].rates[1].mid}
                  <br />
                  <strong>{ert[1].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[0].rates[1].mid}
                  <br />
                  <strong>{ert[0].effectiveDate.slice(5)}</strong>
                </div>
              </section>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-2">
              <h3>
                {ert[4].rates[7].code} {ert[4].rates[7].mid}
                {ert[4].rates[7].mid > ert[3].rates[7].mid ? (
                  <CaretUpOutlined style={{ color: "#52c41a" }} />
                ) : ert[4].rates[1].mid === ert[3].rates.mid ? (
                  <CoffeeOutlined style={{ color: "#f28c2c" }} />
                ) : (
                  <CaretDownOutlined style={{ color: "#eb2f96" }} />
                )}
              </h3>
              <p>{ert[4].rates[7].currency}</p>
              <section className="last5">
                <div>
                  {ert[3].rates[7].mid} <br />
                  <strong>{ert[3].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[2].rates[7].mid}
                  <br />
                  <strong>{ert[2].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[1].rates[7].mid}
                  <br />
                  <strong>{ert[1].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[0].rates[7].mid}
                  <br />
                  <strong>{ert[0].effectiveDate.slice(5)}</strong>
                </div>
              </section>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-3">
              <h3>
                {ert[4].rates[10].code} {ert[4].rates[10].mid}
                {ert[4].rates[10].mid > ert[3].rates[10].mid ? (
                  <CaretUpOutlined style={{ color: "#52c41a" }} />
                ) : ert[4].rates[1].mid === ert[3].rates.mid ? (
                  <CoffeeOutlined style={{ color: "#f28c2c" }} />
                ) : (
                  <CaretDownOutlined style={{ color: "#eb2f96" }} />
                )}
              </h3>
              <p>{ert[4].rates[10].currency}</p>
              <section className="last5">
                <div>
                  {ert[3].rates[10].mid} <br />
                  <strong>{ert[3].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[2].rates[10].mid}
                  <br />
                  <strong>{ert[2].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[1].rates[10].mid}
                  <br />
                  <strong>{ert[1].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[0].rates[10].mid}
                  <br />
                  <strong>{ert[0].effectiveDate.slice(5)}</strong>
                </div>
              </section>
            </div>
          </div>
        </div> */}
        {/* <div class="row">
          <div class="col-md-4">
            <div class="card card-1" onClick={() => console.log(ert)}>
              <h3>
                {ert[4].rates[9].code} {ert[4].rates[9].mid}
                {ert[4].rates[9].mid > ert[3].rates[9].mid ? (
                  <CaretUpOutlined style={{ color: "#52c41a" }} />
                ) : ert[4].rates[1].mid === ert[3].rates.mid ? (
                  <CoffeeOutlined style={{ color: "#f28c2c" }} />
                ) : (
                  <CaretDownOutlined style={{ color: "#eb2f96" }} />
                )}
              </h3>
              <p>{ert[4].rates[9].currency}</p>
              <section className="last5">
                <div>
                  {ert[3].rates[9].mid} <br />
                  <strong>{ert[3].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[2].rates[9].mid}
                  <br />
                  <strong>{ert[2].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[1].rates[9].mid}
                  <br />
                  <strong>{ert[1].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[0].rates[9].mid}
                  <br />
                  <strong>{ert[0].effectiveDate.slice(5)}</strong>
                </div>
              </section>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-2">
              <h3>
                {ert[4].rates[13].code} {ert[4].rates[13].mid}
                {ert[4].rates[13].mid > ert[3].rates[13].mid ? (
                  <CaretUpOutlined style={{ color: "#52c41a" }} />
                ) : ert[4].rates[1].mid === ert[3].rates.mid ? (
                  <CoffeeOutlined style={{ color: "#f28c2c" }} />
                ) : (
                  <CaretDownOutlined style={{ color: "#eb2f96" }} />
                )}
              </h3>
              <p>{ert[4].rates[13].currency}</p>
              <section className="last5">
                <div>
                  {ert[3].rates[13].mid} <br />
                  <strong>{ert[3].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[2].rates[13].mid}
                  <br />
                  <strong>{ert[2].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[1].rates[13].mid}
                  <br />
                  <strong>{ert[1].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[0].rates[13].mid}
                  <br />
                  <strong>{ert[0].effectiveDate.slice(5)}</strong>
                </div>
              </section>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-3">
              <h3>
                {ert[4].rates[17].code} {ert[4].rates[17].mid}
                {ert[4].rates[17].mid > ert[3].rates[17].mid ? (
                  <CaretUpOutlined style={{ color: "#52c41a" }} />
                ) : ert[4].rates[1].mid === ert[3].rates.mid ? (
                  <CoffeeOutlined style={{ color: "#f28c2c" }} />
                ) : (
                  <CaretDownOutlined style={{ color: "#eb2f96" }} />
                )}
              </h3>
              <p>{ert[4].rates[17].currency}</p>
              <section className="last5">
                <div>
                  {ert[3].rates[17].mid} <br />
                  <strong>{ert[3].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[2].rates[17].mid}
                  <br />
                  <strong>{ert[2].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[1].rates[17].mid}
                  <br />
                  <strong>{ert[1].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[0].rates[17].mid}
                  <br />
                  <strong>{ert[0].effectiveDate.slice(5)}</strong>
                </div>
              </section>
            </div>
          </div>
        </div> */}
        {/* <div class="row">
          <div class="col-md-4">
            <div class="card card-1" onClick={() => console.log(ert)}>
              <h3>
                {ert[4].rates[11].code} {ert[4].rates[11].mid}
                {ert[4].rates[11].mid > ert[3].rates[11].mid ? (
                  <CaretUpOutlined style={{ color: "#52c41a" }} />
                ) : ert[4].rates[1].mid === ert[3].rates.mid ? (
                  <CoffeeOutlined style={{ color: "#f28c2c" }} />
                ) : (
                  <CaretDownOutlined style={{ color: "#eb2f96" }} />
                )}
              </h3>
              <p>{ert[4].rates[11].currency}</p>
              <section className="last5">
                <div>
                  {ert[3].rates[11].mid} <br />
                  <strong>{ert[3].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[2].rates[11].mid}
                  <br />
                  <strong>{ert[2].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[1].rates[11].mid}
                  <br />
                  <strong>{ert[1].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[0].rates[11].mid}
                  <br />
                  <strong>{ert[0].effectiveDate.slice(5)}</strong>
                </div>
              </section>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-2">
              <h3>
                {ert[4].rates[16].code} {ert[4].rates[16].mid}
                {ert[4].rates[16].mid > ert[3].rates[16].mid ? (
                  <CaretUpOutlined style={{ color: "#52c41a" }} />
                ) : ert[4].rates[1].mid === ert[3].rates.mid ? (
                  <CoffeeOutlined style={{ color: "#f28c2c" }} />
                ) : (
                  <CaretDownOutlined style={{ color: "#eb2f96" }} />
                )}
              </h3>
              <p>{ert[4].rates[16].currency}</p>
              <section className="last5">
                <div>
                  {ert[3].rates[16].mid} <br />
                  <strong>{ert[3].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[2].rates[16].mid}
                  <br />
                  <strong>{ert[2].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[1].rates[16].mid}
                  <br />
                  <strong>{ert[1].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[0].rates[16].mid}
                  <br />
                  <strong>{ert[0].effectiveDate.slice(5)}</strong>
                </div>
              </section>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-3">
              <h3>
                {ert[4].rates[12].code} {ert[4].rates[12].mid}
                {ert[4].rates[12].mid > ert[3].rates[12].mid ? (
                  <CaretUpOutlined style={{ color: "#52c41a" }} />
                ) : ert[4].rates[1].mid === ert[3].rates.mid ? (
                  <CoffeeOutlined style={{ color: "#f28c2c" }} />
                ) : (
                  <CaretDownOutlined style={{ color: "#eb2f96" }} />
                )}
              </h3>
              <p>{ert[4].rates[12].currency}</p>
              <section className="last5">
                <div>
                  {ert[3].rates[12].mid} <br />
                  <strong>{ert[3].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[2].rates[12].mid}
                  <br />
                  <strong>{ert[2].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[1].rates[12].mid}
                  <br />
                  <strong>{ert[1].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[0].rates[12].mid}
                  <br />
                  <strong>{ert[0].effectiveDate.slice(5)}</strong>
                </div>
              </section>
            </div>
          </div>
        </div> */}
        {/* <div class="row">
          <div class="col-md-4">
            <div class="card card-1" onClick={() => console.log(ert)}>
              <h3>
                {ert[4].rates[14].code} {ert[4].rates[14].mid}
                {ert[4].rates[14].mid > ert[3].rates[14].mid ? (
                  <CaretUpOutlined style={{ color: "#52c41a" }} />
                ) : ert[4].rates[1].mid === ert[3].rates.mid ? (
                  <CoffeeOutlined style={{ color: "#f28c2c" }} />
                ) : (
                  <CaretDownOutlined style={{ color: "#eb2f96" }} />
                )}
              </h3>
              <p>{ert[4].rates[14].currency}</p>
              <section className="last5">
                <div>
                  {ert[3].rates[14].mid} <br />
                  <strong>{ert[3].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[2].rates[14].mid}
                  <br />
                  <strong>{ert[2].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[1].rates[14].mid}
                  <br />
                  <strong>{ert[1].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[0].rates[14].mid}
                  <br />
                  <strong>{ert[0].effectiveDate.slice(5)}</strong>
                </div>
              </section>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-2">
              <h3>
                {ert[4].rates[18].code} {ert[4].rates[18].mid}
                {ert[4].rates[18].mid > ert[3].rates[18].mid ? (
                  <CaretUpOutlined style={{ color: "#52c41a" }} />
                ) : ert[4].rates[1].mid === ert[3].rates.mid ? (
                  <CoffeeOutlined style={{ color: "#f28c2c" }} />
                ) : (
                  <CaretDownOutlined style={{ color: "#eb2f96" }} />
                )}
              </h3>
              <p>{ert[4].rates[18].currency}</p>
              <section className="last5">
                <div>
                  {ert[3].rates[18].mid} <br />
                  <strong>{ert[3].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[2].rates[18].mid}
                  <br />
                  <strong>{ert[2].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[1].rates[18].mid}
                  <br />
                  <strong>{ert[1].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[0].rates[18].mid}
                  <br />
                  <strong>{ert[0].effectiveDate.slice(5)}</strong>
                </div>
              </section>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-3">
              <h3>
                {ert[4].rates[22].code} {ert[4].rates[22].mid}
                {ert[4].rates[22].mid > ert[3].rates[22].mid ? (
                  <CaretUpOutlined style={{ color: "#52c41a" }} />
                ) : ert[4].rates[1].mid === ert[3].rates.mid ? (
                  <CoffeeOutlined style={{ color: "#f28c2c" }} />
                ) : (
                  <CaretDownOutlined style={{ color: "#eb2f96" }} />
                )}
              </h3>
              <p>{ert[4].rates[22].currency}</p>
              <section className="last5">
                <div>
                  {ert[3].rates[22].mid} <br />
                  <strong>{ert[3].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[2].rates[22].mid}
                  <br />
                  <strong>{ert[2].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[1].rates[22].mid}
                  <br />
                  <strong>{ert[1].effectiveDate.slice(5)}</strong>
                </div>
                <div>
                  {ert[0].rates[22].mid}
                  <br />
                  <strong>{ert[0].effectiveDate.slice(5)}</strong>
                </div>
              </section>
            </div>
          </div>
        </div> */}
        <div class="row">
          <div class="col-md-4">
            <CurrencyCard
              cssClass={"card card-" + Math.floor(Math.random() * 3 + 1)}
              code={ert[4].rates[1].code}
              currency={ert[4].rates[1].currency}
              actualRate={ert[4].rates[1].mid}
              yesterdayRate={ert[3].rates[1].mid}
              yesterdayEffectiveDate={ert[3].effectiveDate.slice(5)}
              minusTwoDaysRate={ert[2].rates[1].mid}
              minusTwoDaysEffectiveDate={ert[2].effectiveDate.slice(5)}
              minusThreeDaysRate={ert[1].rates[1].mid}
              minusThreeDaysEffectiveDate={ert[1].effectiveDate.slice(5)}
              minusFourDaysRate={ert[0].rates[1].mid}
              minusFourDaysEffectiveDate={ert[0].effectiveDate.slice(5)}
            />
          </div>
          <div class="col-md-4">
            <CurrencyCard
              cssClass="card card-2"
              code={ert[4].rates[7].code}
              currency={ert[4].rates[7].currency}
              actualRate={ert[4].rates[7].mid}
              yesterdayRate={ert[3].rates[7].mid}
              yesterdayEffectiveDate={ert[3].effectiveDate.slice(5)}
              minusTwoDaysRate={ert[2].rates[7].mid}
              minusTwoDaysEffectiveDate={ert[2].effectiveDate.slice(5)}
              minusThreeDaysRate={ert[1].rates[7].mid}
              minusThreeDaysEffectiveDate={ert[1].effectiveDate.slice(5)}
              minusFourDaysRate={ert[0].rates[7].mid}
              minusFourDaysEffectiveDate={ert[0].effectiveDate.slice(5)}
            />
          </div>
          <div class="col-md-4">
            <CurrencyCard
              cssClass="card card-3"
              code={ert[4].rates[10].code}
              currency={ert[4].rates[10].currency}
              actualRate={ert[4].rates[10].mid}
              yesterdayRate={ert[3].rates[10].mid}
              yesterdayEffectiveDate={ert[3].effectiveDate.slice(5)}
              minusTwoDaysRate={ert[2].rates[10].mid}
              minusTwoDaysEffectiveDate={ert[2].effectiveDate.slice(5)}
              minusThreeDaysRate={ert[1].rates[10].mid}
              minusThreeDaysEffectiveDate={ert[1].effectiveDate.slice(5)}
              minusFourDaysRate={ert[0].rates[10].mid}
              minusFourDaysEffectiveDate={ert[0].effectiveDate.slice(5)}
            />
          </div>
        </div>
        <div className="row">
          <div class="col-md-4">
            <CurrencyCard
              cssClass="card card-1"
              code={ert[4].rates[9].code}
              currency={ert[4].rates[9].currency}
              actualRate={ert[4].rates[9].mid}
              yesterdayRate={ert[3].rates[9].mid}
              yesterdayEffectiveDate={ert[3].effectiveDate.slice(5)}
              minusTwoDaysRate={ert[2].rates[9].mid}
              minusTwoDaysEffectiveDate={ert[2].effectiveDate.slice(5)}
              minusThreeDaysRate={ert[1].rates[9].mid}
              minusThreeDaysEffectiveDate={ert[1].effectiveDate.slice(5)}
              minusFourDaysRate={ert[0].rates[9].mid}
              minusFourDaysEffectiveDate={ert[0].effectiveDate.slice(5)}
            />
          </div>
          <div class="col-md-4">
            <CurrencyCard
              cssClass="card card-2"
              code={ert[4].rates[13].code}
              currency={ert[4].rates[13].currency}
              actualRate={ert[4].rates[13].mid}
              yesterdayRate={ert[3].rates[13].mid}
              yesterdayEffectiveDate={ert[3].effectiveDate.slice(5)}
              minusTwoDaysRate={ert[2].rates[13].mid}
              minusTwoDaysEffectiveDate={ert[2].effectiveDate.slice(5)}
              minusThreeDaysRate={ert[1].rates[13].mid}
              minusThreeDaysEffectiveDate={ert[1].effectiveDate.slice(5)}
              minusFourDaysRate={ert[0].rates[13].mid}
              minusFourDaysEffectiveDate={ert[0].effectiveDate.slice(5)}
            />
          </div>
          <div class="col-md-4">
            <CurrencyCard
              cssClass="card card-3"
              code={ert[4].rates[17].code}
              currency={ert[4].rates[17].currency}
              actualRate={ert[4].rates[17].mid}
              yesterdayRate={ert[3].rates[17].mid}
              yesterdayEffectiveDate={ert[3].effectiveDate.slice(5)}
              minusTwoDaysRate={ert[2].rates[17].mid}
              minusTwoDaysEffectiveDate={ert[2].effectiveDate.slice(5)}
              minusThreeDaysRate={ert[1].rates[17].mid}
              minusThreeDaysEffectiveDate={ert[1].effectiveDate.slice(5)}
              minusFourDaysRate={ert[0].rates[17].mid}
              minusFourDaysEffectiveDate={ert[0].effectiveDate.slice(5)}
            />
          </div>
        </div>
        <div className="row">
          <div class="col-md-4">
            <CurrencyCard
              cssClass="card card-1"
              code={ert[4].rates[11].code}
              currency={ert[4].rates[11].currency}
              actualRate={ert[4].rates[11].mid}
              yesterdayRate={ert[3].rates[11].mid}
              yesterdayEffectiveDate={ert[3].effectiveDate.slice(5)}
              minusTwoDaysRate={ert[2].rates[11].mid}
              minusTwoDaysEffectiveDate={ert[2].effectiveDate.slice(5)}
              minusThreeDaysRate={ert[1].rates[11].mid}
              minusThreeDaysEffectiveDate={ert[1].effectiveDate.slice(5)}
              minusFourDaysRate={ert[0].rates[11].mid}
              minusFourDaysEffectiveDate={ert[0].effectiveDate.slice(5)}
            />
          </div>
          <div class="col-md-4">
            <CurrencyCard
              cssClass="card card-2"
              code={ert[4].rates[16].code}
              currency={ert[4].rates[16].currency}
              actualRate={ert[4].rates[16].mid}
              yesterdayRate={ert[3].rates[16].mid}
              yesterdayEffectiveDate={ert[3].effectiveDate.slice(5)}
              minusTwoDaysRate={ert[2].rates[16].mid}
              minusTwoDaysEffectiveDate={ert[2].effectiveDate.slice(5)}
              minusThreeDaysRate={ert[1].rates[16].mid}
              minusThreeDaysEffectiveDate={ert[1].effectiveDate.slice(5)}
              minusFourDaysRate={ert[0].rates[16].mid}
              minusFourDaysEffectiveDate={ert[0].effectiveDate.slice(5)}
            />
          </div>
          <div class="col-md-4">
            <CurrencyCard
              cssClass="card card-3"
              code={ert[4].rates[12].code}
              currency={ert[4].rates[12].currency}
              actualRate={ert[4].rates[12].mid}
              yesterdayRate={ert[3].rates[12].mid}
              yesterdayEffectiveDate={ert[3].effectiveDate.slice(5)}
              minusTwoDaysRate={ert[2].rates[12].mid}
              minusTwoDaysEffectiveDate={ert[2].effectiveDate.slice(5)}
              minusThreeDaysRate={ert[1].rates[12].mid}
              minusThreeDaysEffectiveDate={ert[1].effectiveDate.slice(5)}
              minusFourDaysRate={ert[0].rates[12].mid}
              minusFourDaysEffectiveDate={ert[0].effectiveDate.slice(5)}
            />
          </div>
        </div>
        <div className="row">
          <div class="col-md-4">
            <CurrencyCard
              cssClass="card card-1"
              code={ert[4].rates[14].code}
              currency={ert[4].rates[14].currency}
              actualRate={ert[4].rates[14].mid}
              yesterdayRate={ert[3].rates[14].mid}
              yesterdayEffectiveDate={ert[3].effectiveDate.slice(5)}
              minusTwoDaysRate={ert[2].rates[14].mid}
              minusTwoDaysEffectiveDate={ert[2].effectiveDate.slice(5)}
              minusThreeDaysRate={ert[1].rates[14].mid}
              minusThreeDaysEffectiveDate={ert[1].effectiveDate.slice(5)}
              minusFourDaysRate={ert[0].rates[14].mid}
              minusFourDaysEffectiveDate={ert[0].effectiveDate.slice(5)}
            />
          </div>
          <div class="col-md-4">
            <CurrencyCard
              cssClass="card card-2"
              code={ert[4].rates[18].code}
              currency={ert[4].rates[18].currency}
              actualRate={ert[4].rates[18].mid}
              yesterdayRate={ert[3].rates[18].mid}
              yesterdayEffectiveDate={ert[3].effectiveDate.slice(5)}
              minusTwoDaysRate={ert[2].rates[18].mid}
              minusTwoDaysEffectiveDate={ert[2].effectiveDate.slice(5)}
              minusThreeDaysRate={ert[1].rates[18].mid}
              minusThreeDaysEffectiveDate={ert[1].effectiveDate.slice(5)}
              minusFourDaysRate={ert[0].rates[18].mid}
              minusFourDaysEffectiveDate={ert[0].effectiveDate.slice(5)}
            />
          </div>
          <div class="col-md-4">
            <CurrencyCard
              cssClass="card card-3"
              code={ert[4].rates[22].code}
              currency={ert[4].rates[22].currency}
              actualRate={ert[4].rates[22].mid}
              yesterdayRate={ert[3].rates[22].mid}
              yesterdayEffectiveDate={ert[3].effectiveDate.slice(5)}
              minusTwoDaysRate={ert[2].rates[22].mid}
              minusTwoDaysEffectiveDate={ert[2].effectiveDate.slice(5)}
              minusThreeDaysRate={ert[1].rates[22].mid}
              minusThreeDaysEffectiveDate={ert[1].effectiveDate.slice(5)}
              minusFourDaysRate={ert[0].rates[22].mid}
              minusFourDaysEffectiveDate={ert[0].effectiveDate.slice(5)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ert;
