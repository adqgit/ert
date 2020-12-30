import React from "react";
import "./Ert.css";

function Ert({ ert }) {
  return (
    <>
      {console.log("render ert")}
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,900"
        rel="stylesheet"
      />
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card card-1" onClick={() => console.log(ert)}>
              <h3>
                {ert[0].rates[1].code} {ert[0].rates[1].mid}
              </h3>
              <p>{ert[0].rates[1].currency}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-2">
              <h3>
                {ert[0].rates[7].code} {ert[0].rates[7].mid}
              </h3>
              <p>{ert[0].rates[7].currency}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-3">
              <h3>
                {ert[0].rates[10].code} {ert[0].rates[10].mid}
              </h3>
              <p>{ert[0].rates[10].currency}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card card-1" onClick={() => console.log(ert)}>
              <h3>
                {ert[0].rates[9].code} {ert[0].rates[9].mid}
              </h3>
              <p>{ert[0].rates[9].currency}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-2">
              <h3>
                {ert[0].rates[13].code} {ert[0].rates[13].mid}
              </h3>
              <p>{ert[0].rates[13].currency}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-3">
              <h3>
                {ert[0].rates[17].code} {ert[0].rates[17].mid}
              </h3>
              <p>{ert[0].rates[17].currency}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card card-1" onClick={() => console.log(ert)}>
              <h3>
                {ert[0].rates[11].code} {ert[0].rates[11].mid}
              </h3>
              <p>{ert[0].rates[11].currency}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-2">
              <h3>
                {ert[0].rates[16].code} {ert[0].rates[16].mid}
              </h3>
              <p>{ert[0].rates[16].currency}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-3">
              <h3>
                {ert[0].rates[12].code} {ert[0].rates[12].mid}
              </h3>
              <p>{ert[0].rates[12].currency}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card card-1" onClick={() => console.log(ert)}>
              <h3>
                {ert[0].rates[14].code} {ert[0].rates[14].mid}
              </h3>
              <p>{ert[0].rates[14].currency}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-2">
              <h3>
                {ert[0].rates[18].code} {ert[0].rates[18].mid}
              </h3>
              <p>{ert[0].rates[18].currency}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-3">
              <h3>
                {ert[0].rates[22].code} {ert[0].rates[22].mid}
              </h3>
              <p>{ert[0].rates[22].currency}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ert;
