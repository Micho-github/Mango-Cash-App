using MangoCashApp.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Service.Abstracts
{
    public interface ITransactionService
    {
        public Task<List<Transaction>> GetTransactionsListAsync();

        public Task<Transaction> GetTransactionByIdAsync(Guid id);

        public Task<string> CreateTransactionAsync(Transaction transaction);

    }
}
