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
    public class TransactionRepository : GenericRepositoryAsync<Transaction>, ITransactionRepository
    {
        #region Fields
        private readonly DbSet<Transaction> _transactions;
        #endregion

        #region Constructors
        public TransactionRepository(ApplicationDBContext dbContext) : base(dbContext)
        {
            _transactions = dbContext.Set<Transaction>();

        }
        #endregion

        #region Handles Functions
        public async Task<List<Transaction>> GetTransactionsListAsync()
        {
            return await _transactions.ToListAsync();
        }
        #endregion

    }
}
