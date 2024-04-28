using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MangoCashApp.Data.Entities;
using MediatR;

namespace MangoCashApp.Core.Features.Transactions.Queries.Models
{
    public class GetTransactionByIdQuery : IRequest<Transaction>
    {
        [Required]
        public Guid TransactionId { get; set; }
    }
}
