using MangoCashApp.Core.Bases;
using MangoCashApp.Core.Features.Accounts.Commands.Models;
using MangoCashApp.Data.Entities;
using MangoCashApp.Service.Abstracts;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Core.Features.Accounts.Commands.Handlers
{
    public class AccountCommandHandler : ResponseHandler,
                                       IRequestHandler<AddAccountCommand, Response<string>>,
                                       IRequestHandler<UpdateBalanceCommand, Response<string>>
    {

        #region Fields
        private readonly IAccountService _accountService;
        #endregion

        #region Constructors
        public AccountCommandHandler(IAccountService accountService)
        {
            _accountService = accountService;
            
        }
        #endregion

        #region Handle Functions
        public async Task<Response<string>> Handle(AddAccountCommand request, CancellationToken cancellationToken)
        {
            var Hashedpassword = SimpleHash(request.Password);

            var account = new Account
            {
                UserEmail = request.UserEmail,
                Username = request.Username,
                Password = Hashedpassword,
                Phone = request.Phone,
                Balance = 0,

            };
            //add
            var result = await _accountService.CreateAccountAsync(account);
            //check condition
            if (result == "Exist") return new Response<string>("Email already exists");
            //return response
            
            else if (result == "Success") return Created("Added Successfully");
            
            else return BadRequest<String>();

        }

        public async Task<Response<string>> Handle(UpdateBalanceCommand request, CancellationToken cancellationToken)
        {
            //check if id exist first
            var account = await _accountService.GetAccountByIdAsync(request.AccountId);

            //return not found
            if (account == null) return NotFound<string>("Account not found");

            //call service that make an edit
            var balance = account.Balance;
            var newbalance = balance + request.Balance;
            if (newbalance < 0)
            {
                return BadRequest<string>("Insufficient funds");
            }
            var result = await _accountService.UpdateBalanceAsync(account,newbalance);
            //return response
             if (result == "Success") return Created($"balance update Successfull to {request.AccountId} old {balance} new {newbalance}");

             else return BadRequest<String>();
        }
        #endregion

        #region hashing function
        public string SimpleHash(string password)
        {
            int hash = 0;
            foreach (char c in password)
            {
                hash = (hash + (int)c) * 31;
            }
            return hash.ToString();
        }
        #endregion

    }
}
