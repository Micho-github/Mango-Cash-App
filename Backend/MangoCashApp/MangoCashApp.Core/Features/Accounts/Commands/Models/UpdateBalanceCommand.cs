using MediatR;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Core.Features.Accounts.Commands.Models
{
    public class UpdateBalanceCommand : IRequest<Bases.Response<string>>
    {
        public Guid AccountId { get; set; }
        public decimal Balance { get; set; }
    }
}
