import React, { useState, useEffect } from "react";
import "./CurrencyConverter.css";
import ConverterResult from "./ConverterResult";
import {
  Button,
  Input,
  Select,
  DatePicker,
  Row,
  Col,
  Modal,
  Divider,
} from "antd";
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
  const [rateDate, setRateDate] = useState();
  const [rate, setRate] = useState();
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [clipboard, setClipboard] = useClippy();

  const handleCopyToClipboard = () => {
    setClipboard(calculationResult);
    success(calculationResult);
  };

  const handleCopyToClipboardComa = () => {
    const calculationResultComa = calculationResult.replace(".", ",");
    setClipboard(calculationResultComa);
    success(calculationResultComa);
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
    if (localStorage.getItem("amount") === undefined) {
      console.log("hahah");
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
            const dateToLocalStorage = data.rates[0].effectiveDate;
            setRateDate(data.rates[0].effectiveDate);
            localStorage.setItem("localRateDate", dateToLocalStorage);
            setRate(data.rates[0].mid.toFixed(2));
            // localStorage.setItem("localRate", data.rates[0].mid.toFixed(2));
          } else {
            const tempAmount = (amount * data.rates[0].mid).toFixed(2);

            setCalculationResult(tempAmount);
            setRateDate(data.rates[0].effectiveDate);
            setRate(data.rates[0].mid.toFixed(2));
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

  // const activeFirstCurrencies = currencies.map((currency) =>
  //   currency === secondCurrency ? (
  //     <Option value={currency} key={currency} disabled>
  //       {currency}
  //     </Option>
  //   ) : (
  //     <Option value={currency} key={currency}>
  //       {currency}
  //     </Option>
  //   )
  // );

  const activeFirstCurrencies = currencies.map((currency) => {
    // if (currency === secondCurrency)
    //   return (
    //     <Option value={currency} key={currency} disabled>
    //       {currency}
    //     </Option>
    //   );
    // else
    //   return (
    //     <Option value={currency} key={currency}>
    //       {currency}
    //     </Option>
    //   );

    if (currency === secondCurrency)
      return (
        <Option value={currency} key={currency} disabled>
          {currency}
        </Option>
      );
    else if (secondCurrency !== "PLN" && currency === "PLN")
      return (
        <Option value={currency} key={currency}>
          {currency}
        </Option>
      );
    else if (secondCurrency !== "PLN" && currency !== "PLN")
      return (
        <Option value={currency} key={currency} disabled>
          {currency}
        </Option>
      );
    else
      return (
        <Option value={currency} key={currency}>
          {currency}
        </Option>
      );
  });
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
  // const activeSecondCurrencies = currencies.map((currency) =>
  //   currency === firstCurrency ? (
  //     <Option value={currency} disabled>
  //       {currency}
  //     </Option>
  //   ) : (
  //     <Option value={currency}>{currency}</Option>
  //   )
  // );
  const activeSecondCurrencies = currencies.map((currency) => {
    if (currency === firstCurrency)
      return (
        <Option value={currency} key={currency} disabled>
          {currency}
        </Option>
      );
    else if (firstCurrency !== "PLN" && currency === "PLN")
      return (
        <Option value={currency} key={currency}>
          {currency}
        </Option>
      );
    else if (firstCurrency !== "PLN" && currency !== "PLN")
      return (
        <Option value={currency} key={currency} disabled>
          {currency}
        </Option>
      );
    else
      return (
        <Option value={currency} key={currency}>
          {currency}
        </Option>
      );
  });
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
      // !!inputValue.match(/^[0-9]+(\.|,[0-9]{1,2})?$/) ||
      // !!inputValue.match(/^[0-9]+(\.|,)?$/) ||
      !!inputValue.match(/^[0-9]+((\.[0-9]{1,2})|(,[0-9]{1,2}))?$/) ||
      !!inputValue.match(/^[0-9]+((\.)|(,))?$/) ||
      inputValue === ""
    ) {
      if (
        inputValue.includes(",") &&
        !!inputValue.match(/^[0-9]+((\.[0-9]{1,2})|(\,[0-9]{1,2}))?$/)
      ) {
        const newValue = inputValue.replace(/,/g, ".");
        parseFloat(newValue);

        setAmount(newValue);
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
    setRateDate("");
    setRate("");
  };

  return (
    <>
      <div className="site-input-group-wrapper d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
        <Input.Group size="medium">
          <Row gutter={8} justify={"center"}>
            <Col>
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
          <Row justify={"center"}>
            <Col>
              {calculationResult ? (
                <p>
                  Według średniego kursu NBP z{" "}
                  <strong>
                    {rateDate} ( {rate} )
                  </strong>
                </p>
              ) : null}
              {/* <br /> */}
            </Col>
          </Row>
          <Divider orientation="center">Wybierz datę</Divider>
          <Row gutter={8} justify={"center"}>
            <Col>
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
          <Divider orientation="center">Kopiuj do schowka</Divider>
          <Row gutter={8} justify={"center"}>
            <Col>
              <Button
                disabled={calculationResult ? false : true}
                onClick={handleCopyToClipboard}
              >
                Kopiuj z kropką
              </Button>
            </Col>
            <Col>
              <Button
                disabled={calculationResult ? false : true}
                onClick={handleCopyToClipboardComa}
              >
                Kopiuj z przecinkiem
              </Button>
            </Col>
          </Row>
          <Divider orientation="center">Resetuj</Divider>
          <Row justify={"center"}>
            <Col>
              <Button
                disabled={calculationResult ? false : true}
                onClick={handleReset}
              >
                Reset
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
          <Row justify={"center"}>
            <Col>
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
                  Data: <strong>{rateDate}</strong> Kurs:
                  <strong> {rate}</strong>
                </p>
              ) : null}
            </Col>
          </Row>
          <Divider orientation="center">Wybierz datę</Divider>
          <Row justify={"center"}>
            <Col>
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
          <Divider orientation="center">Kopiuj do schowka</Divider>
          <Row gutter={8} justify={"center"}>
            <Col>
              <Button
                // style={{ textAlign: "center", width: "100%" }}
                disabled={calculationResult ? false : true}
                onClick={handleCopyToClipboard}
                // flex={auto}
              >
                Kopiuj z kropką
              </Button>
            </Col>
          </Row>
          <br />
          <Row justify={"center"}>
            <Col>
              <Button
                disabled={calculationResult ? false : true}
                onClick={handleCopyToClipboardComa}
              >
                Kopiuj z przecinkiem
              </Button>
            </Col>
          </Row>
          <Divider orientation="center">Resetuj</Divider>
          <Row gutter={8} justify={"center"}>
            <Col>
              <Button
                disabled={calculationResult ? false : true}
                onClick={handleReset}
              >
                Reset
              </Button>
            </Col>
          </Row>
        </Input.Group>
      </div>
    </>
  );
};

export default CurrencyConverter;
