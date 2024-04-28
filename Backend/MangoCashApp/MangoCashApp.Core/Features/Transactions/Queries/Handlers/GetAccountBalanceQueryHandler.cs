using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using MediatR;
using MangoCashApp.Core.Features.Transactions.Queries.Models;
using MangoCashApp.Infrustructure.Abstracts;

namespace MangoCashApp.Core.Features.Transactions.Queries.Handlers
{
    public class GetAccountBalanceQueryHandler : IRequestHandler<GetAccountBalanceQuery, decimal>
    {
        // Inject dependencies like IAccountRepository here
        private readonly IAccountRepository _accountRepository;

        public GetAccountBalanceQueryHandler(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        public async Task<decimal> Handle(GetAccountBalanceQuery request, CancellationToken cancellationToken)
        {
            var account = await _accountRepository.GetById(request.AccountId);
            return account?.Balance ?? 0; // Return 0 if account not found
        }
    }
}
