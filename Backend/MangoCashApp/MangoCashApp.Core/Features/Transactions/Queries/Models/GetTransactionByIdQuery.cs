using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MangoCashApp.Core.Bases;
using MangoCashApp.Data.Entities;
using MediatR;

namespace MangoCashApp.Core.Features.Transactions.Queries.Models
{
    public class GetTransactionByIdQuery : IRequest<Response<Transaction>>
    {
        [Required]
        public Guid AccountId { get; set; }

        public GetTransactionByIdQuery(Guid id)
        {
            this.AccountId = id;
        }
    }
}