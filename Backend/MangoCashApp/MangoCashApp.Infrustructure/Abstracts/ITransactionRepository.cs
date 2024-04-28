using MangoCashApp.Data.Entities;
using MangoCashApp.Infrustructure.InfrustractureBases;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Infrustructure.Abstracts
{
    public interface ITransactionRepository : IGenericRepositoryAsync<Transaction>
    {
        public Task<List<Transaction>> GetTransactionsListAsync();

    }
}
