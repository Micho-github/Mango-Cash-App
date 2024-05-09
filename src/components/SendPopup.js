import React, { useState } from 'react';
import axios from 'axios';

const SendPopup = ({ closePopup, accountId }) => {
  const [amount, setAmount] = useState(0);
  const [toAcountID, setToAcountID] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`http://localhost:5247/api/Transactions/Api/V1/Transaction/Transaction`, {
          amount,
          accountId,
          toAcountID,
          transactionType: "Send",
        });
        console.log(response.data);
    } catch (error) {
        console.error("Error sending transaction:", error);
    }
  };

  return (
    <div className="popup">
        <div className="popup-container">
            <div className="popup-header">
                <h3>Send Money</h3>
            </div>
            <div className="popup-content">
                <form onSubmit={handleSubmit}>
                <label htmlFor="amount">Amount:</label>
                <input type="number" className="insert" min="0.01" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                <label htmlFor="toAcountID">Recipient Account ID:</label>
                <input type="text" className="insert" id="toAcountID" value={toAcountID} onChange={(e) => setToAcountID(e.target.value)} required />
                <div className="button-container">
                    <button type="submit" onClick={handleSubmit} className="send-button">Send</button>
                    <button onClick={closePopup} className="cancel-button">Cancel</button>
                </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default SendPopup;
