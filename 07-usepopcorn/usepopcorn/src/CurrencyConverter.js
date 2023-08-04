import { useEffect, useState } from "react";

export default function CurrencyConverter() {
  const style = { fontFamily: "sans-serif", textAlign: "center" };
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [converted, setConverted] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
          );
          const data = await res.json();
          setConverted(data?.rates[toCurrency]);
        } catch (err) {
          if (fromCurrency === toCurrency) {
            return setConverted(amount);
          }
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      convert();
    },
    [fromCurrency, toCurrency, amount]
  );

  return (
    <div style={style}>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{converted ? converted.toFixed(2) : ""}</p>
    </div>
  );
}
