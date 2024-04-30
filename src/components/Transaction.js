import React from 'react';

function Transaction({ transaction }) {

    switch (transaction.TransactionType) {
        case 'deposit':
            return (
                <div className="w-layout-blockcontainer container-3 w-container">
                    <img src="images/deposit.png" loading="lazy" width="Auto" sizes="50px" alt="" className="image-8-copy" />
                    <div className="w-layout-blockcontainer container-5 w-container">
                        <div className="text-block-15">Deposit</div>
                        <div className="text-block-15-copy">{transaction.Date}</div>
                    </div>
                    <div className="receive_amount">+ {transaction.Amount}</div>
                </div>
            );
        case 'withdraw':
            return (
                <div className="w-layout-blockcontainer container-3 w-container">
                    <img src="images/withdraw.png" loading="lazy" width="Auto" sizes="50px" alt="" className="image-8-copy-copy" />
                    <div className="w-layout-blockcontainer container-5 w-container">
                        <div className="text-block-15">Withdraw</div>
                        <div className="text-block-15-copy">{transaction.Date}</div>
                    </div>
                    <div className="withdraw_amount">- {transaction.Amount}</div>
                </div>
            );
        case 'receive':
            return (
                <div className="w-layout-blockcontainer container-3 w-container">
                    <img src="images/withdraw.png" loading="lazy" width="Auto" sizes="50px" alt="" className="image-9-copy" />
                    <div className="w-layout-blockcontainer container-5 w-container">
                        <div className="text-block-15">Received from {transaction.FromAccountName}</div>
                        <div className="text-block-15-copy">{transaction.Date}</div>
                    </div>
                    <div className="receive_amount">+ {transaction.Amount}</div>
                </div>
            );
        case 'send':
            return (
                <div className="w-layout-blockcontainer container-3 w-container">
                    <img src="images/withdraw.png" loading="lazy" width="Auto" sizes="50px" alt="" className="image-9-copy-copy" />
                    <div className="w-layout-blockcontainer container-5 w-container">
                        <div className="text-block-15">Sent to {transaction.ToAccountName}</div>
                        <div className="text-block-15-copy">{transaction.Date}</div>
                    </div>
                    <div className="withdraw_amount">- {transaction.Amount}</div>
                </div>
            );
        default:
            return null;
    };

};

export default Transaction;
