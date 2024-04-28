using MangoCashApp.Core.Bases;
using MangoCashApp.Core.Features.Transactions.Commands.Models;
using MangoCashApp.Data.Entities; // Assuming Transaction Entity resides here
using MangoCashApp.Service.Abstracts; // Assuming Transaction service interface resides here
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Core.Features.Transactions.Commands.Handlers
{
    public class TransactionCommandHandler : ResponseHandler,
                                           IRequestHandler<TransactionCommand, BaseResponse>
    {
        #region Fields
        private readonly ITransactionService _transactionService;
        #endregion

        #region Constructors
        public TransactionCommandHandler(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }
        #endregion

        #region Handle Methods
        public async Task<BaseResponse> Handle(TransactionCommand request, CancellationToken cancellationToken)
        {
            Transaction transaction;

            if (request.TransactionType == "Deposit")
            {
                transaction = new Transaction
                {
                    AccountId = request.AccountId,
                    Amount = request.Amount,
                    Description = $"Deposit from {request.FromAccountName}" // Assuming FromAccountName reflects deposit source
                };

                await _transactionService.DepositAsync(transaction);
            }
            else if (request.TransactionType == "Withdraw")
            {
                transaction = new Transaction
                {
                    AccountId = request.AccountId,
                    Amount = -request.Amount, // Negative for withdrawal
                    Description = $"Withdrawal to {request.ToAccountName}" // Assuming ToAccountName reflects withdrawal destination
                };

                await _transactionService.WithdrawAsync(transaction);
            }
            else if (request.TransactionType == "Send")
            {
                // Need to find recipient account ID based on ToAccountName
                var recipientAccountId = await _transactionService.GetAccountIdByAccountNameAsync(request.ToAccountName);

                if (recipientAccountId == null)
                {
                    throw new InvalidOperationException("Recipient account not found");
                }

                var fromTransaction = new Transaction
                {
                    AccountId = request.AccountId,
                    Amount = request.Amount
                };

                var toTransaction = new Transaction
                {
                    AccountId = recipientAccountId.Value, // Assuming GetAccountIdByAccountNameAsync returns a valid Guid?
                    Amount = -request.Amount, // Negative for transfer
                    Description = $"Sent to {request.ToAccountName}" // Assuming ToAccountName reflects recipient
                };

                await _transactionService.WithdrawAsync(fromTransaction);
                await _transactionService.DepositAsync(toTransaction);
            }
            else
            {
                throw new InvalidOperationException("Invalid Transaction Type");
            }

            return new BaseResponse();
        }
        #endregion
    }
}
