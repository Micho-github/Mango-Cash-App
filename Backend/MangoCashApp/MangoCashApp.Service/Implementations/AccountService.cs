using MangoCashApp.Data.Entities;
using MangoCashApp.Infrustructure.Abstracts;
using MangoCashApp.Service.Abstracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Service.Implementations
{
    public class AccountService : IAccountService
    {
        #region Fields
        private readonly IAccountRepository _accountRepository;
        #endregion

        #region constructors
        public AccountService(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }
        #endregion

        #region Handle Functions
        public async Task<List<Account>> GetAccountsListAsync()
        {
            return await _accountRepository.GetAccountsListAsync();
        }

        public async Task<Account> GetAccountByIdAsync(Guid id)
        {
            // var account = await _accountRepository.GetByIdAsync(id);
            var account = _accountRepository.GetTableNoTracking()
                                            .Where(x => x.Id.Equals(id))
                                            .FirstOrDefault();
            return account;
        }

        public async Task<string> CreateAccountAsync(Account account)
        {
            //Check if the name is Exist or not
            var AccountResult = _accountRepository.GetTableNoTracking().Where(x => x.UserEmail.Equals(account.UserEmail)).FirstOrDefault();
            if (AccountResult != null) return "Exist";

            //Added Account
            await _accountRepository.AddAsync(account);
            return "Success";
        }

        public async Task<Account> GetAccountByLoginAsync(string Email, string Password)
        {
            var AccountResult = _accountRepository.GetTableNoTracking()
                                                   .Where(x => x.UserEmail.Equals(Email))
                                                   .FirstOrDefault();
            var hashedpassword = SimpleHash(Password);
            if (AccountResult == null || AccountResult.Password != hashedpassword)
            {
                return null;
            }
            return AccountResult;
        }

        public async Task<string> UpdateBalanceAsync(Account account, decimal balance)
        {
            var accountToUpdate = await _accountRepository.GetByIdAsync(account.Id);  // Replace with appropriate method

            if (accountToUpdate == null)
            {
                return "Account not found";  // Handle case where account doesn't exist
            }

            // Update the balance property directly
            accountToUpdate.Balance += balance;
            if (accountToUpdate.Balance < 0)
            {
                return "Insufficient funds";
            }

            // Save the changes through the repository
            await _accountRepository.UpdateAsync(accountToUpdate);
            return "Success";
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