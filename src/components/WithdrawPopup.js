import React, { useState } from 'react';
import axios from 'axios';

const WithdrawPopup = ({ closePopup, accountId }) => {
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`http://localhost:5247/api/Transactions/Api/V1/Transaction/Transaction`, {
          "accountId": accountId,
          "transactionType": "withdraw",
          "fromAccountName": "Banking Service",
          "toAccountName": "You",
          "date": new Date(),
          "amount": amount
        });
        
        console.log(response.data);
        closePopup();
      } catch (error) {
        console.log(new Date())
        console.error("Error withdrawing money:", error);
      }
  };

  return (
    <div className="popup">
        <div className="popup-container">
            <div className="popup-header">
                <h3>Withdraw Money</h3>
            </div>
            <div className="popup-content">
                <form onSubmit={handleSubmit}>
                <label htmlFor="amount">Amount:</label>
                <input type="number" className="insert" min="0.01" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                <div className="button-container">
                    <button type="submit" onClick={handleSubmit} className="withdraw-button">Withdraw</button>
                    <button onClick={closePopup} className="cancel-button">Cancel</button>
                </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default WithdrawPopup;
