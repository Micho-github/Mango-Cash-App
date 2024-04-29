using MangoCashApp.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Service.Abstracts
{
    public interface IAccountService
    {
        public Task<List<Account>> GetAccountsListAsync();

        public Task<Account> GetAccountByIdAsync(Guid id);

        public Task<string> CreateAccountAsync(Account account);

        public Task<Account> GetAccountByLoginAsync(string Email,String Password);

        public Task<string> UpdateBalanceAsync(Account account, decimal balance);
    }
}
