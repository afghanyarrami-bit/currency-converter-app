import React, { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const exchangeRates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
    AFN: 65.5  
  };
  
  const amountInUSD = useMemo(() => {
    return amount / exchangeRates[fromCurrency];
  }, [amount, exchangeRates, fromCurrency]);
  
  const convertedAmount = amountInUSD * exchangeRates[toCurrency];
  
  return (
    <div className="App">
      <h1>💱 Currency Converter</h1>
      
      <div className="input-group">
        <label>Amount</label>
        <input 
          type="number" 
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
          placeholder="Enter amount"
        />
      </div>
      
      <div className="input-group">
        <label>From</label>
        <select 
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">🇺🇸 USD - US Dollar</option>
          <option value="EUR">🇪🇺 EUR - Euro</option>
          <option value="GBP">🇬🇧 GBP - British Pound</option>
          <option value="JPY">🇯🇵 JPY - Japanese Yen</option>
          <option value="AFN">🇦🇫 AFN - Afghan Afghani</option>
        </select>
      </div>
      
      <div className="input-group">
        <label>To</label>
        <select 
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">🇺🇸 USD - US Dollar</option>
          <option value="EUR">🇪🇺 EUR - Euro</option>
          <option value="GBP">🇬🇧 GBP - British Pound</option>
          <option value="JPY">🇯🇵 JPY - Japanese Yen</option>
          <option value="AFN">🇦🇫 AFN - Afghan Afghani</option>
        </select>
      </div>
      
      <div className="result-box">
        <div className="result-label">Converted Amount</div>
        <div className="result-amount">
          {convertedAmount.toFixed(2)} {toCurrency}
        </div>
      </div>
    </div>
  );
}

export default App;