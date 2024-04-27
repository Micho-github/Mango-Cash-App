using MangoCashApp.Data.Entities;
using MangoCashApp.Infrustructure.Abstracts;
using MangoCashApp.Infrustructure.Data;
using MangoCashApp.Infrustructure.InfrustractureBases;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Infrustructure.Repositories
{
    public class AccountRepository : GenericRepositoryAsync<Account>,IAccountRepository
    {
        #region Fields
        private readonly DbSet<Account> _accounts;
        #endregion

        #region Constructors
        public AccountRepository(ApplicationDBContext dbContext):base(dbContext)
        {
            _accounts = dbContext.Set<Account>();

        }
        #endregion

        #region Handles Functions
        public async Task<List<Account>> GetAccountsListAsync()
        {
            return await _accounts.ToListAsync();
        }
        #endregion

    }
}
