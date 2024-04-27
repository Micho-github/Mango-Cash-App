using MangoCashApp.Core.Bases;
using MangoCashApp.Data.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Core.Features.Accounts.Queries.Models
{
    public class GetAccountByLogin : IRequest<Response<Account>>
    {
            public string UserEmail { get; set; }
            public string Password { get; set; }

            public GetAccountByLogin(string UserEmail, String Password)
            {
                this.UserEmail = UserEmail;
                this.Password = Password;
            }


        }
    }

