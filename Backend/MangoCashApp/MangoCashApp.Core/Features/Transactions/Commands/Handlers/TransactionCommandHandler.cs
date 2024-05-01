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

namespace MangoCashApp.Core.Features.Transactions.Commands.Handlers
{
    
    public class TransactionCommandHandler : ResponseHandler,
                                       IRequestHandler<AddTransactionCommand, Response<string>>
    {

        #region Fields
        private readonly ITransactionService _transactionService;
        private readonly IAccountService _accountService;
        #endregion

        #region Constructors
        public TransactionCommandHandler(ITransactionService transactionService, IAccountService accountService)
        {
            _transactionService = transactionService;
            _accountService = accountService;
        }
        #endregion

        #region Handle Functions
        public async Task<Response<string>> Handle(AddTransactionCommand request, CancellationToken cancellationToken)
        {
            Transaction transaction;

            if (request.TransactionType == "deposit")
            {
                transaction = new Transaction
                {
                    AccountId = request.AccountId,
                    Amount = request.Amount,
                    FromAccountName = request.FromAccountName,
                    ToAccountName = request.ToAccountName,
                    Date = request.Date,
                    TransactionType = request.TransactionType,
                };

            }
            else if (request.TransactionType == "withdraw")
            {
                transaction = new Transaction
                {
                    AccountId = request.AccountId,
                    Amount = -request.Amount,
                    FromAccountName = request.FromAccountName,
                    ToAccountName = request.ToAccountName,
                    Date = request.Date,
                    TransactionType = request.TransactionType,
                };

            }
            else if (request.TransactionType == "send")
            {
                transaction = new Transaction
                {
                    AccountId = request.AccountId,
                    Amount = -request.Amount,
                    FromAccountName = request.FromAccountName,
                    ToAccountName = request.ToAccountName,
                    Date = request.Date,
                    TransactionType = request.TransactionType,
                };

            }

            else if (request.TransactionType == "receive")
            {
                // Need to find recipient account ID based on ToAccountName
                var recipientAccountId = await _accountService.GetAccountByIdAsync(request.AccountId);

                if (recipientAccountId == null)
                {
                    return new Response<string>("Recipient account not found");
                }

                transaction = new Transaction
                {
                    AccountId = recipientAccountId.Id,
                    Amount = request.Amount,
                    FromAccountName = request.FromAccountName,
                    ToAccountName = request.ToAccountName,
                    Date = request.Date,
                    TransactionType = request.TransactionType,
                };

            }
            else
            {
                return new Response<string>("Invalid Transaction Type");
            }

            var Account = await _accountService.GetAccountByIdAsync(request.AccountId);

            var _ = await _accountService.UpdateBalanceAsync(Account, transaction.Amount);

            if (_ == "Success")
            {
                var result = await _transactionService.CreateTransactionAsync(transaction);
                //return response

                if (result == "Success") return Created("Added Successfully");

                else return BadRequest<String>();
            }
            else return BadRequest<String>();
        }
      
        #endregion
    }
}
