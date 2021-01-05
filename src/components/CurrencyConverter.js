import React, { useState, useEffect } from "react";
import "./CurrencyConverter.css";
import ConverterResult from "./ConverterResult";
import { Button, Input, Select, DatePicker, Row, Col, Modal } from "antd";
import { RetweetOutlined } from "@ant-design/icons";
import moment from "moment";
import useClippy from "use-clippy";

const { Option } = Select;

const currencies = [
  "EUR",
  "GBP",
  "USD",
  "SEK",
  "AUD",
  "HUF",
  "RUB",
  "NOK",
  "CZK",
  "DKK",
  "CHF",
  "JPY",
  "PLN",
];

// const selectAfter = (
//   <Select defaultValue=".com" className="select-after">
//     <Option value=".com">.com</Option>
//     <Option value=".jp">.jp</Option>
//     <Option value=".cn">.cn</Option>
//     <Option value=".org">.org</Option>
//   </Select>
// );

const CurrencyConverter = (props) => {
  const [firstCurrency, setFirstCurrency] = useState("EUR");
  const [secondCurrency, setSecondCurrency] = useState("PLN");
  const [amount, setAmount] = useState("");
  const [calculationResult, setCalculationResult] = useState();
  const [rateResult, setRateResult] = useState();
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [clipboard, setClipboard] = useClippy();

  const handleCopyToClipboard = () => {
    setClipboard(calculationResult);
    success(calculationResult);
  };

  function success(copiedText) {
    Modal.success({
      content: "Skopiowano: " + copiedText,
    });
  }

  useEffect(() => {
    let newDate = selectedDate;
    if (amount === "") {
      setCalculationResult("");
    }

    const fetchNow = () => {
      newDate = moment(newDate).subtract(1, "days").format("YYYY-MM-DD");
      const url = `https://api.nbp.pl/api/exchangerates/rates/a/${
        firstCurrency === "PLN" ? secondCurrency : firstCurrency
      }/${newDate}/?format=json`;

      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response;
          } else if (response.status === 404) {
            return Promise.reject("404");
          } else {
            return Promise.reject("some other error: " + response.status);
          }
        })
        .then((response) => response.json())
        .then((data) => {
          if (firstCurrency === "PLN") {
            const tempAmount = (amount / data.rates[0].mid).toFixed(2);

            setCalculationResult(tempAmount);
            setRateResult(data.rates[0].effectiveDate);
          } else {
            const tempAmount = (amount * data.rates[0].mid).toFixed(2);

            setCalculationResult(tempAmount);
            setRateResult(data.rates[0].effectiveDate);
          }
          console.log(data);
        })

        .catch((error) => {
          if (error === "404") {
            fetchNow();
          } else {
            console.log("jakis inny blad");
          }
        });
    };
    if (amount !== "") {
      fetchNow();
    }
    // debugger;
  }, [firstCurrency, secondCurrency, amount, selectedDate]);

  function disabledDates(current) {
    let customDate = moment();
    return current && current > moment(customDate, "YYYY-MM-DD");
  }

  const activeFirstCurrencies = currencies.map((currency) =>
    currency === secondCurrency ? (
      <Option value={currency} key={currency} disabled>
        {currency}
      </Option>
    ) : (
      <Option value={currency} key={currency}>
        {currency}
      </Option>
    )
  );

  const selectFirstCurrencyAfter = (
    <Select
      value={firstCurrency}
      className="select-after"
      onChange={(data) => {
        setFirstCurrency(data);
      }}
    >
      {" "}
      + {activeFirstCurrencies}+
    </Select>
  );
  const activeSecondCurrencies = currencies.map((currency) =>
    currency === firstCurrency ? (
      <Option value={currency} disabled>
        {currency}
      </Option>
    ) : (
      <Option value={currency}>{currency}</Option>
    )
  );
  const selectSecondCurrencyAfter = (
    <Select
      value={secondCurrency}
      defaultValue={secondCurrency}
      className="select-after"
      onChange={(data) => {
        setSecondCurrency(data);
      }}
    >
      {" "}
      + {activeSecondCurrencies}+
    </Select>
  );

  const toggleCurrencies = () => {
    const tempFirstCurrency = firstCurrency;
    const tempSecondCurrency = secondCurrency;
    setFirstCurrency(tempSecondCurrency);
    setSecondCurrency(tempFirstCurrency);
  };

  function onDateChange(date, dateString) {
    setSelectedDate(dateString);
  }

  const handleAmountChange = (e) => {
    const inputValue = e.target.value;
    // setAmount(inputValue);

    if (
      !!inputValue.match(/^[0-9]+(\.[0-9]{1,2})?$/) ||
      !!inputValue.match(/^[0-9]+(\.)?$/) ||
      inputValue === ""
    ) {
      if (inputValue.isNaN) {
        console.log("Input jest NaN");
      } else {
        setAmount(inputValue);
      }
    } else {
      console.log("Wartość nieprawidłowa");
    }
  };

  const handleReset = () => {
    setFirstCurrency("EUR");
    setSecondCurrency("PLN");
    setSelectedDate(moment().format("YYYY-MM-DD"));
    setAmount("");
    setCalculationResult("");
    setRateResult("");
  };

  return (
    <>
      <div className="site-input-group-wrapper d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
        <Input.Group size="medium">
          <Row gutter={8}>
            <Col span={4}>
              <Input
                addonAfter={selectFirstCurrencyAfter}
                placeholder="Podaj kwotę..."
                onChange={handleAmountChange}
                value={amount}
              />
            </Col>
            <Col>
              <Button onClick={toggleCurrencies}>
                <RetweetOutlined
                  style={{ fontSize: "20px", color: "#1890ff" }}
                />
              </Button>
            </Col>

            <Col span={4}>
              <Input
                disabled
                addonAfter={selectSecondCurrencyAfter}
                defaultValue="Wynik kalkulacji..."
                value={calculationResult}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col offset={2}>
              {calculationResult ? (
                <p>
                  Według średniego kursu NBP z <strong>{rateResult}</strong>
                </p>
              ) : null}
              {/* <br /> */}
            </Col>
          </Row>
          <Row gutter={8}>
            <Col offset={1}>
              <DatePicker
                defaultValue={moment()}
                // defaultValue={selectedDate}
                format="YYYY-MM-DD"
                disabledDate={disabledDates}
                onChange={onDateChange}
                inputReadOnly={true}
                locale="pl"
              />
            </Col>
            <Col>
              <Button
                disabled={calculationResult ? false : true}
                onClick={handleCopyToClipboard}
              >
                Kopiuj
              </Button>
            </Col>
            <Col>
              <Button
                disabled={calculationResult ? false : true}
                onClick={handleReset}
              >
                Reset to default
              </Button>
            </Col>
          </Row>
        </Input.Group>
        <br />
      </div>
      <div className="site-input-group-wrapper d-block d-sm-block d-md-block d-lg-none">
        <Input.Group size="medium">
          <Row>
            <Col>
              <Input
                addonAfter={selectFirstCurrencyAfter}
                placeholder="Podaj kwotę..."
                onChange={handleAmountChange}
                value={amount}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col offset={8}>
              <Button onClick={toggleCurrencies}>
                <RetweetOutlined
                  style={{ fontSize: "20px", color: "#1890ff" }}
                />
              </Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Input
                disabled
                addonAfter={selectSecondCurrencyAfter}
                defaultValue="Wynik kalkulacji..."
                value={calculationResult}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col offset={4}>
              {calculationResult ? (
                <p>
                  Kurs NBP z <strong>{rateResult}</strong>
                </p>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col offset={4}>
              <DatePicker
                defaultValue={moment()}
                // defaultValue={selectedDate}
                format="YYYY-MM-DD"
                disabledDate={disabledDates}
                onChange={onDateChange}
                inputReadOnly={true}
                locale="pl"
              />
            </Col>
          </Row>
          <br />
          <Row gutter={8}>
            <Col offset={2}>
              <Button
                disabled={calculationResult ? false : true}
                onClick={handleCopyToClipboard}
              >
                Kopiuj
              </Button>
            </Col>
            <Col>
              <Button
                disabled={calculationResult ? false : true}
                onClick={handleReset}
              >
                Reset to default
              </Button>
            </Col>
          </Row>
        </Input.Group>
      </div>
    </>
  );
};

export default CurrencyConverter;
