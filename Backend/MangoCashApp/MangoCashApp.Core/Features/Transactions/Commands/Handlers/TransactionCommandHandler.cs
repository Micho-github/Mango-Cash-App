using MangoCashApp.Core.Bases;
using MangoCashApp.Core.Features.Transactions.Commands.Models;
using MangoCashApp.Data.Entities;
using MangoCashApp.Service.Abstracts;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
/*
namespace MangoCashApp.Core.Features.Transactions.Commands.Handlers
{
    
    public class TransactionCommandHandler : ResponseHandler,
                                       IRequestHandler<AddTransactionCommand, Response<string>>
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

        #region Handle Functions
        public async Task<Response<string>> Handle(AddTransactionCommand request, CancellationToken cancellationToken)
        {
            Transaction transaction;

            if (request.TransactionType == "Deposit")
            {
                transaction = new Transaction
                {
                    AccountId = request.AccountId,
                    Amount = request.Amount
                };

                await _transactionService.DepositAsync(transaction);
            }
            else if (request.TransactionType == "Withdraw")
            {
                transaction = new Transaction
                {
                    AccountId = request.AccountId,
                    Amount = -request.Amount, // Negative for withdrawal
                };

                await _transactionService.WithdrawAsync(transaction);
            }
            else if (request.TransactionType == "Send")
            {
                var fromTransaction = new Transaction
                {
                    AccountId = request.AccountId,
                    Amount = request.Amount
                };

                await _transactionService.WithdrawAsync(fromTransaction);
            }

            else if (request.TransactionType == "Recieve")
            {
                // Need to find recipient account ID based on ToAccountName
                var recipientAccountId = await _transactionService.GetAccountByIdAsync(request.ToAccounId);

                if (recipientAccountId == null)
                {
                    throw new InvalidOperationException("Recipient account not found");
                }

                var toTransaction = new Transaction
                {
                    AccountId = recipientAccountId.Value, // Assuming GetAccountIdByAccountNameAsync returns a valid Guid?
                    Amount = -request.Amount, // Negative for transfer
                };

                await _transactionService.DepositAsync(toTransaction);
            }
            else
            {
                throw new InvalidOperationException("Invalid Transaction Type");
            }

            return new Response<string>();
        }
      
#endregion
}
}
     */
