using Azure;
using MangoCashApp.Core.Bases;
using MediatR;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Core.Features.Accounts.Commands.Models
{
    public class AddAccountCommand: IRequest<Bases.Response<string>>
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [EmailAddress]
        public string UserEmail { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public int Phone { get; set; }
        public decimal Balance { get; set; }
    }
}
