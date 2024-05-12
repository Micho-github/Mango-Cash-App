import React, { useState } from 'react';
import axios from 'axios';

const SendPopup = ({ closePopup, accountId, accountname }) => {
  const [amount, setAmount] = useState(0);
  const [toAccountID, setToAccountID] = useState('');
  const [account, setAccount] = useState([]);
  const [AccountFound,SetAccountFound] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`http://localhost:5247/api/Transactions/Api/V1/Transaction/Transaction`, {
          "accountId": accountId,
          "transactionType": "send",
          "fromAccountName": "You",
          "toAccountName": account.username,
          "date": new Date(),
          "amount": amount
        });
        const response2 = await axios.post(`http://localhost:5247/api/Transactions/Api/V1/Transaction/Transaction`, {
          "accountId": toAccountID,
          "transactionType": "receive",
          "fromAccountName": accountname,
          "toAccountName": "You",
          "date": new Date(),
          "amount": amount
        });

        console.log(response.data);
        console.log(response2.data);
        closePopup();
    } catch (error) {
        console.error("Error sending transaction:", error);
    }
  };

  const fetchAccount = async () => {
    try {
        const response = await axios.get(`http://localhost:5247/api/Accounts/Api/V1/Account/${toAccountID}`);
        console.log(response.data);
        setAccount(response.data.data);
        SetAccountFound(true);
    } catch (error) {
        SetAccountFound(false);
        console.error("Error fetching account: ", error);
    }
  }

  return (
    <div className="popup">
        <div className="popup-container">
            <div className="popup-header">
                <h3>Send Money</h3>
            </div>
            <div className="popup-content">
              
                <form>
                
                  {AccountFound ? (<>
                <label htmlFor="amount">Amount:</label>
                <input type="number" className="insert" min="0.01" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                <div className="button-container">
                  <button type="submit"
                  onClick={handleSubmit} 
                  className="send-button">Send</button>
                  <button onClick={closePopup} className="cancel-button">Cancel</button>
                  </div>
                  </>
                ):(<>
                  <label htmlFor="toAccountID">Recipient Account ID:</label>
                <input type="text" className="insert" id="toAccountID" value={toAccountID} onChange={(e) => setToAccountID(e.target.value)} required />
                <div className="button-container">
                  <button type="button" 
                  onClick={fetchAccount} 
                  className="send-button">Check</button>
                  <button onClick={closePopup} className="cancel-button">Cancel</button>
                  </div>
                  </>
                  )}
                </form>
            </div>
        </div>
    </div>
  );
};

export default SendPopup;
