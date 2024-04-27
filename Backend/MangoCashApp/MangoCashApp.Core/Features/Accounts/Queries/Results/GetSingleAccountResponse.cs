using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Core.Features.Accounts.Queries.Results
{
    public class GetSingleAccountResponse
    {
        public Guid Id { get; set; }
        public string? Username { get; set; }
        public string? UserEmail { get; set; }
        public int? Phone { get; set; }
        public decimal? Balance { get; set; }
    }
}
