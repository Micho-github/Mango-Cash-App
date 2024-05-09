import React, { useState } from 'react';
import axios from 'axios';

const DepositPopup = ({ closePopup, accountId }) => {
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`http://localhost:5247/api/Transactions/Api/V1/Transaction/Transaction`, {
          amount,
          accountId,
          transactionType: "Deposit",
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error depositing money:", error);
      }
  };

  return (
    <div className="popup">
      <div className="popup-container">
        <div className="popup-header">
          <h3>Deposit Money</h3>
        </div>
        <div className="popup-content">
          <form onSubmit={handleSubmit}>
            <label htmlFor="amount">Amount:</label>
            <input type="number" className="insert" min="0.01" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <div className="button-container">
              <button type="submit" onClick={handleSubmit} className="deposit-button">Deposit</button>
              <button onClick={closePopup} className="cancel-button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DepositPopup;
