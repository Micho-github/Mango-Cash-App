using MangoCashApp.Api.Base;
using MangoCashApp.Core.Features.Transactions.Commands.Models;
using MangoCashApp.Core.Features.Transactions.Queries.Models;
using MangoCashApp.Data.AppMetaData;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MangoCashApp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : AppControllerBase
    {
        [HttpPost(Router.TransactionRouting.Transaction)]
        public async Task<IActionResult> Transaction([FromBody] AddTransactionCommand command)
        {
            var response = await Mediator.Send(command);
            return NewResult(response);
        }
    }
}
