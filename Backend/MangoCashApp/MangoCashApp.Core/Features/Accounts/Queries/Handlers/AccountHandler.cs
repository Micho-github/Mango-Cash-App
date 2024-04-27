using MangoCashApp.Core.Bases;
using MangoCashApp.Core.Features.Accounts.Queries.Models;
using MangoCashApp.Core.Features.Accounts.Queries.Results;
using MangoCashApp.Data.Entities;
using MangoCashApp.Service.Abstracts;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Core.Features.Accounts.Queries.Handlers
{
    public class AccountHandler : ResponseHandler,
                                  IRequestHandler<GetAccountListQuery,Response <List<Account>>>,
                                  IRequestHandler<GetAccountByIdQuery,Response<Account>>,
                                  IRequestHandler<GetAccountByLogin,Response<Account>>
    {

        #region Fields
        private readonly IAccountService _accountService;
        #endregion

        #region Constuctor
        public AccountHandler(IAccountService accountService)
        {
            _accountService = accountService;
        }
        #endregion

        #region handler Functions
        public async Task<Response<List<Account>>> Handle(GetAccountListQuery request, CancellationToken cancellationToken)
        {
            return Success(await _accountService.GetAccountsListAsync());
        }

        public async Task<Response<Account>> Handle(GetAccountByIdQuery request, CancellationToken cancellationToken)
        {
            var account = await _accountService.GetAccountByIdAsync(request.Id);
            if (account == null) return NotFound<Account>("Object not found.");
            return Success(account);
        }

        public async Task<Response<Account>> Handle(GetAccountByLogin request, CancellationToken cancellationToken)
        {
            var account = await _accountService.GetAccountByLoginAsync(request.UserEmail,request.Password);
            if (account == null) return NotFound<Account>("Wrong Email or Password.");
            return Success(account);
        }


        #endregion


    }
}
