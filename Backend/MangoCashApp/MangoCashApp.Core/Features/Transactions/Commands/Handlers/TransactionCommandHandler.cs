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
            var transaction = new Transaction
            {

                TransactionType = request.TransactionType,

            };
            //add
            var result = await _transactionService.CreateTransactionAsync(transaction);
            //check condition
            //if (result == "Exist") return new Response<string>("Email already exists");
            //return response

            if (result == "Success") return Created("Added Successfully");

            else return BadRequest<String>();

        }
        #endregion

        #region hashing function
       
        #endregion

    }
}
