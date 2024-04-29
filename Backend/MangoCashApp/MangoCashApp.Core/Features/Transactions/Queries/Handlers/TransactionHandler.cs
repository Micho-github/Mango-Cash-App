using MangoCashApp.Core.Bases;
using MangoCashApp.Core.Features.Transactions.Queries.Models;
using MangoCashApp.Data.Entities; // Assuming Transaction Entity resides here
using MangoCashApp.Service.Abstracts; // Assuming Transaction service interface resides here
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Core.Features.Transactions.Queries.Handlers
{
    public class TransactionHandler : ResponseHandler,
                                                 IRequestHandler<GetTransactionByIdQuery, Response<Transaction>>
    {
        #region Fields
        private readonly ITransactionService _transactionService;
        #endregion

        #region Constructors
        public TransactionHandler(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }
        #endregion

        #region Handle Method
        public async Task<Response<Transaction>> Handle(GetTransactionByIdQuery request, CancellationToken cancellationToken)
        {
            var transaction = await _transactionService.GetTransactionByIdAsync(request.AccountId);
            if (transaction == null)
            {
                return NotFound<Transaction>("Transaction not found");
            }

            return Success(transaction);
        }
        #endregion
    }
}
