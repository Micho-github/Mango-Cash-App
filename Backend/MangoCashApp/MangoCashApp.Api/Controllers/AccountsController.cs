using MangoCashApp.Api.Base;
using MangoCashApp.Core.Features.Accounts.Commands.Models;
using MangoCashApp.Core.Features.Accounts.Queries.Models;
using MangoCashApp.Data.AppMetaData;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MangoCashApp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : AppControllerBase
    {
        [HttpGet(Router.AccountRouting.List)]
        public async Task<IActionResult> GetAccountList()
        {
            var response = await  Mediator.Send(new GetAccountListQuery());
            return Ok(response);
        }
        [HttpGet(Router.AccountRouting.GetById)]
        public async Task<IActionResult> GetAcconntById([FromRoute] Guid id)
        {
            return NewResult(await Mediator.Send(new GetAccountByIdQuery(id)));
        }
        [HttpPost(Router.AccountRouting.SignUp)]
        public async Task<IActionResult> SignUp([FromBody] AddAccountCommand command)
        {
            var response = await  Mediator.Send(command);
            return NewResult(response);
        }
        [HttpPost(Router.AccountRouting.Login)]
        public async Task<IActionResult> Login([FromBody] GetAccountByLogin login)
        {
            var response = await Mediator.Send(login);
            return NewResult(response);
        }
        [HttpPut(Router.AccountRouting.UpdateBalance)]
        public async Task<IActionResult> UpdateBalance([FromBody] UpdateBalanceCommand command)
        {
            var response = await Mediator.Send(command);
            return NewResult(response);
        }
    }
}
