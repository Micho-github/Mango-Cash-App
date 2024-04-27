using MangoCashApp.Data.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MangoCashApp.Core.Bases;
namespace MangoCashApp.Core.Features.Accounts.Queries.Models
{
    public class GetAccountListQuery : IRequest<Response<List<Account>>>
    {
    }
}
