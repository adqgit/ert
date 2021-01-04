import React, { useState } from "react";
import "./CurrencyConverter.css";
import ConverterResult from "./ConverterResult";
import { Form, Input, Button, Select, DatePicker, Modal } from "antd";
import moment from "moment";
// import "moment/locale/pl-pl";
// import locale from "antd/lib/locale/pl_PL";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 4,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 1,
    span: 4,
  },
};

const CurrencyConverter = (props) => {
  const actualDate = new Date()
    .toISOString()
    .toLocaleString("pl-pl")
    .slice(0, 10);

  let selectedDate = "";
  let selectedDateMinusOneDay = "";
  let selectedCurrency = "";
  let amount = "";
  const [dataFound, setDateFound] = useState("", []);
  const [rateFound, setRateFound] = useState("", []);
  const [calculationResult, setCalculationResult] = useState("", []);
  const [calculatedAmount, setCalculatedAmount] = useState("", []);
  const [calculatedCurrency, setCalculatedCurrency] = useState("", []);
  const [calculatedDate, setCalculatedDay] = useState("", []);

  const currencies = [
    "EUR",
    "GBP",
    "SEK",
    "AUD",
    "HUF",
    "RUB",
    "NOK",
    "CZK",
    "DKK",
    "CHF",
    "JPY",
  ];
  const [form] = Form.useForm();

  function warningAmount() {
    Modal.warning({
      title: "Ooops coś poszło nie tak...",
      content: "Proszę podać prawidłową kwotę...",
    });
  }

  const onFinish = (values) => {
    if (values.Data === undefined || values.Data > actualDate) {
      selectedDate = actualDate;
      console.log("Data pobrana z inputa " + selectedDate);
      const dateMinusOneDay = moment(selectedDate)
        .subtract(0, "day")
        .toISOString()
        .split("T")[0];
      selectedDateMinusOneDay = dateMinusOneDay;
      console.log("data minus 1 dzien: ", selectedDateMinusOneDay);
      // } else if (values.Data > actualDate) {
      //   warningDate({ content: "Proszę podać właściwą datę..." });
      //   console.log(selectedDate);
    } else {
      const date = values.Data.toISOString().split("T")[0];

      selectedDate = date;
      const dateMinusOneDay = moment(date)
        .subtract(0, "day")
        .toISOString()
        .split("T")[0];
      selectedDateMinusOneDay = dateMinusOneDay;
    }
    if (
      !!values.kwota.match(
        /^[0-9]+(\.[0-9]{1,2})?$/
        // /(?=.)^\$?(([1-9][0-9]{0,20}(,[0-9]{3})*)|0)?(.[0-9]{1,2})?$/
      )
    ) {
      amount = values.kwota;
    } else {
      warningAmount();
    }
    selectedCurrency = values.waluta;

    if (amount) {
      const url = `https://api.nbp.pl/api/exchangerates/rates/a/${selectedCurrency}/${selectedDateMinusOneDay}/?format=json`;
      fetch(url)
        .then((response) => {
          console.log(
            "sprawdzamy pierwszy fetch data to" + selectedDateMinusOneDay
          );
          if (response.ok) {
            return response;
          }
          throw Error(response.statusText);
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDateFound(data.rates[0].effectiveDate);
          setRateFound(data.rates[0].mid);
          setCalculationResult((amount * data.rates[0].mid).toFixed(2));
          setCalculatedAmount(amount);
          setCalculatedCurrency(selectedCurrency);
          setCalculatedDay(selectedDate);

          // debugger;
        })
        .catch((status) => {
          console.log("taki blad ", status);
          const dateMinusTwoDays = moment(selectedDateMinusOneDay)
            .subtract(0, "day")
            .toISOString()
            .split("T")[0];

          console.log("Nowa data to: ", dateMinusTwoDays);

          fetch(
            `https://api.nbp.pl/api/exchangerates/rates/a/${selectedCurrency}/${dateMinusTwoDays}/?format=json`
          )
            .then((response) => {
              if (response.ok) {
                return response;
              }
              throw Error(response.statusText);
            })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setDateFound(data.rates[0].effectiveDate);
              setRateFound(data.rates[0].mid);
              console.log(data.rates[0].effectiveDate, data.rates[0].mid);
              setCalculationResult((amount * data.rates[0].mid).toFixed(2));
              setCalculatedAmount(amount);
              setCalculatedCurrency(selectedCurrency);
              setCalculatedDay(selectedDate);
            })
            .catch(() => {
              const dateMinusThreeDays = moment(dateMinusTwoDays)
                .subtract(0, "day")
                .toISOString()
                .split("T")[0];

              console.log("Nowa data to: ", dateMinusThreeDays);

              fetch(
                `https://api.nbp.pl/api/exchangerates/rates/a/${selectedCurrency}/${dateMinusThreeDays}/?format=json`
              )
                .then((response) => {
                  if (response.ok) {
                    return response;
                  }
                  throw Error(response.statusText);
                })
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                  setDateFound(data.rates[0].effectiveDate);
                  setRateFound(data.rates[0].mid);
                  console.log(data.rates[0].effectiveDate, data.rates[0].mid);
                  setCalculationResult((amount * data.rates[0].mid).toFixed(2));
                  setCalculatedAmount(amount);
                  setCalculatedCurrency(selectedCurrency);
                  setCalculatedDay(selectedDate);
                })
                .catch(() => {
                  const dateMinusFourDays = moment(dateMinusThreeDays)
                    .subtract(0, "day")
                    .toISOString()
                    .split("T")[0];

                  console.log("Nowa data to: ", dateMinusFourDays);

                  fetch(
                    `https://api.nbp.pl/api/exchangerates/rates/a/${selectedCurrency}/${dateMinusFourDays}/?format=json`
                  )
                    .then((response) => {
                      if (response.ok) {
                        return response;
                      }
                      throw Error(response.statusText);
                    })
                    .then((response) => response.json())
                    .then((data) => {
                      console.log(data);
                      setDateFound(data.rates[0].effectiveDate);
                      setRateFound(data.rates[0].mid);
                      setCalculationResult(
                        (amount * data.rates[0].mid).toFixed(2)
                      );
                      setCalculatedAmount(amount);
                      setCalculatedCurrency(selectedCurrency);
                      setCalculatedDay(selectedDate);
                      console.log(
                        data.rates[0].effectiveDate,
                        data.rates[0].mid
                      );
                    })
                    .catch(() => {
                      const dateMinusFiveDays = moment(dateMinusFourDays)
                        .subtract(0, "day")
                        .toISOString()
                        .split("T")[0];

                      console.log("Nowa data to: ", dateMinusFiveDays);

                      fetch(
                        `https://api.nbp.pl/api/exchangerates/rates/a/${selectedCurrency}/${dateMinusFiveDays}/?format=json`
                      )
                        .then((response) => {
                          if (response.ok) {
                            return response;
                          }
                          throw Error(response.statusText);
                        })
                        .then((response) => response.json())
                        .then((data) => {
                          console.log(data);
                          setDateFound(data.rates[0].effectiveDate);
                          setRateFound(data.rates[0].mid);
                          setCalculationResult(
                            (amount * data.rates[0].mid).toFixed(2)
                          );
                          setCalculatedAmount(amount);
                          setCalculatedCurrency(selectedCurrency);
                          setCalculatedDay(selectedDate);
                          console.log(
                            data.rates[0].effectiveDate,
                            data.rates[0].mid
                          );
                        })
                        .catch((error) => console.log(error));
                    });
                });
            });
        });
    }
  };

  const onReset = () => {
    form.resetFields();
    setCalculationResult("");
  };

  const waluty = currencies.map((currency) => (
    <Option value={currency}>{currency}</Option>
  ));

  return (
    <>
      <p>Zamień na PLN według kursu za poprzedni dzień roboczy.</p>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="kwota"
          label="Kwota"
          tooltip="Przykład: 100.45"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="waluta"
          label="Waluta"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Proszę wybrać z listy" allowClear>
            {/* <Option value="EUR">EUR</Option>
            <Option value="USD">USD</Option>
            <Option value="inne">inne</Option> */}
            {waluty}
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.waluta !== currentValues.waluta
          }
        >
          {({ getFieldValue }) => {
            return getFieldValue("waluta") === "inne" ? (
              <Form.Item
                name="dodatkoweWaluty"
                label="Dodatkowe waluty"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            ) : null;
          }}
        </Form.Item>
        <Form.Item
          name="Data"
          label="Data"
          tooltip="Puste pole - oznacza dzisiejszą datę"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Oblicz
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
      {calculationResult !== "" ? (
        <ConverterResult
          calculatedDate={calculatedDate}
          calculatedCurrency={calculatedCurrency}
          calculatedAmount={calculatedAmount}
          tradingDate={dataFound}
          rate={rateFound}
          calculationResult={calculationResult}
        />
      ) : null}
    </>
  );
};

export default CurrencyConverter;
