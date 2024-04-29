using Azure;
using MangoCashApp.Core.Bases;
using MediatR;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Core.Features.Transactions.Commands.Models
{
    public class TransactionCommand: IRequest<Bases.Response<string>>
    {
        [Required]
        public Guid AccountId { get; set; }

        [Required]
        public string TransactionType { get; set; }

        public string? FromAccountName { get; set; }

        public string? ToAccountName { get; set; }

        public DateTime Date { get; set; }= DateTime.Now;

        [Required]
        public decimal Amount { get; set; }

    }
}
