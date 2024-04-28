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
    public class GetTransactionByIdQueryHandler : ResponseHandler,
                                                 IRequestHandler<GetTransactionByIdQuery, Response<Transaction>>
    {
        #region Fields
        private readonly ITransactionService _transactionService;
        #endregion

        #region Constructors
        public GetTransactionByIdQueryHandler(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }
        #endregion

        #region Handle Method
        public async Task<Response<Transaction>> Handle(GetTransactionByIdQuery request, CancellationToken cancellationToken)
        {
            var transaction = await _transactionService.GetTransactionByIdAsync(request.TransactionId);
            if (transaction == null)
            {
                return NotFound<Transaction>("Transaction not found");
            }

            return Success(transaction);
        }
        #endregion

        #region HandleException Method (Optional)
        // You can optionally implement custom logic for handling exceptions here
        public async Task<Response<Transaction>> HandleException(Exception exception, GetTransactionByIdQuery request, CancellationToken cancellationToken)
        {
            // Implement logic for handling exceptions during transaction retrieval
            return null;
        }
        #endregion
    }
}
