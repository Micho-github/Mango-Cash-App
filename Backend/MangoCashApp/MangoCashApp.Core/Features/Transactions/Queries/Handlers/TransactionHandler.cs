using MangoCashApp.Core.Bases;
using MangoCashApp.Core.Features.Accounts.Queries.Models;
using MangoCashApp.Core.Features.Accounts.Queries.Results;
using MangoCashApp.Data.Entities;
using MangoCashApp.Service.Abstracts;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Core.Features.Transactions.Queries.Handlers
{
    public class TransactionHandler : ResponseHandler,
                                  IRequestHandler<GetTransactionListQuery, Response<List<Transaction>>>
                                 
    {

        #region Fields
        private readonly ITransactionService _transactionService;
        #endregion

        #region Constuctor
        public TransactionHandler(ITransactionService TransactionService)
        {
            _transactionService = transactionService;
        }
        #endregion

        #region handler Functions
        public async Task<Response<List<Transaction>>> Handle(GetTransactionListQuery request, CancellationToken cancellationToken)
        {
            return Success(await _transactionService.GetAccountsListAsync());
        }

        public async Task<Response<Transaction>> Handle(GetTransactionByIdQuery request, CancellationToken cancellationToken)
        {
            var account = await _transactionService.GetTransactionByIdAsync(request.Id);
            if (account == null) return NotFound<Transaction>("Object not found.");
            return Success(account);
        }


        #endregion


    }
}
