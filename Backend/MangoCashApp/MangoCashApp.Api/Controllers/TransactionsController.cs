using MangoCashApp.Api.Base;
using MangoCashApp.Core.Features.Accounts.Queries.Models;
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
        [HttpGet(Router.TransactionRouting.List)]
        public async Task<IActionResult> GetTransactionList()
        {
            var response = await Mediator.Send(new GetTransactionListQuery());
            return Ok(response);
        }
        [HttpGet(Router.TransactionRouting.GetById)]
        public async Task<IActionResult> GetTransactionById([FromRoute] Guid id)
        {
            return NewResult(await Mediator.Send(new GetTransactionByIdQuery(id)));
        }

        /*[HttpPost(Router.TransactionRouting.Transaction)]
        * public async Task<IActionResult> Transaction([FromBody] AddTransactionCommand command)
        {
            var response = await Mediator.Send(command);
            return NewResult(response);
        }*/
    }
}
