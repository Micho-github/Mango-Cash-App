using MangoCashApp.Core.Bases;
using MangoCashApp.Core.Features.Accounts.Queries.Results;
using MangoCashApp.Data.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Core.Features.Accounts.Queries.Models
{
    public class GetAccountByIdQuery:IRequest<Response<Account>>
    {
        public Guid Id { get; set; }

        public GetAccountByIdQuery(Guid id)
        {
           Id = id;
        }

        
    }
}
