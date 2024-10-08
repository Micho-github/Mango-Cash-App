﻿using MangoCashApp.Data.Entities;
using MangoCashApp.Infrustructure.Abstracts;
using MangoCashApp.Service.Abstracts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Service.Implementations
{
    public class TransactionService : ITransactionService
    {
        #region Fields
        private readonly ITransactionRepository _transactionRepository;
        #endregion

        #region constructors
        public TransactionService(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }
        #endregion

        #region Handle Functions
        public async Task<List<Transaction>> GetTransactionsListAsync()
        {
            return await _transactionRepository.GetTransactionsListAsync();
        }

        public async Task<List<Transaction>> GetTransactionByIdAsync(Guid id)
        {
            // var transaction = await _transactionRepository.GetByIdAsync(id);
            var transaction = await _transactionRepository.GetTableNoTracking()
                                            .Where(x => x.AccountId.Equals(id))
                                            .ToListAsync();
            return transaction;
        }

        public async Task<string> CreateTransactionAsync(Transaction transaction)
        {

            //Added Transaction
            await _transactionRepository.AddAsync(transaction);
            return "Success";
        }
        #endregion

    }
}