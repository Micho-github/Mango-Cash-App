using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;

namespace MangoCashApp.Core.Features.Transactions.Queries.Models
{
    public class GetAccountBalanceQuery : IRequest<decimal>
    {
        [Required]
        public Guid AccountId { get; set; }
    }
}
