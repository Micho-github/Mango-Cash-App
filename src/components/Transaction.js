import React from 'react';

function Transaction({ transaction }) {

    
    const date = String(transaction.date).split("T");
    const splitsec = date[1].split(".");
    const newdate = date[0] + " " + splitsec[0];
    switch (String(transaction.transactionType).toLowerCase()) {

        case 'deposit':
            return (
                <div className="w-layout-blockcontainer container-3 w-container">
                    <img src="../images/deposit.png" loading="lazy" width="Auto" sizes="50px" alt="" className="image-8-copy" />
                    <div className="w-layout-blockcontainer container-5 w-container">
                        <div className="text-block-15">Deposit</div>
                        <div className="text-block-15-copy">{newdate}</div>
                    </div>
                    <div className="receive_amount">+ {transaction.amount}</div>
                </div>
            );
        case 'withdraw':
            return (
                <div className="w-layout-blockcontainer container-3 w-container">
                    <img src="../images/withdraw.png" loading="lazy" width="Auto" sizes="50px" alt="" className="image-8-copy-copy" />
                    <div className="w-layout-blockcontainer container-5 w-container">
                        <div className="text-block-15">Withdraw</div>
                        <div className="text-block-15-copy">{newdate}</div>
                    </div>
                    <div className="withdraw_amount"> {transaction.amount}</div>
                </div>
            );
        case 'receive':
            return (
                <div className="w-layout-blockcontainer container-3 w-container">
                    <img src="../images/withdraw.png" loading="lazy" width="Auto" sizes="50px" alt="" className="image-9-copy" />
                    <div className="w-layout-blockcontainer container-5 w-container">
                        <div className="text-block-15">Received from {transaction.fromAccountName}</div>
                        <div className="text-block-15-copy">{newdate}</div>
                    </div>
                    <div className="receive_amount">+ {transaction.amount}</div>
                </div>
            );
        case 'send':
            return (
                <div className="w-layout-blockcontainer container-3 w-container">
                    <img src="../images/withdraw.png" loading="lazy" width="Auto" sizes="50px" alt="" className="image-9-copy-copy" />
                    <div className="w-layout-blockcontainer container-5 w-container">
                        <div className="text-block-15">Sent to {transaction.toAccountName}</div>
                        <div className="text-block-15-copy">{newdate}</div>
                    </div>
                    <div className="withdraw_amount">{transaction.amount}</div>
                </div>
            );
        default:
            return console.log("default");
    };

};

export default Transaction;
