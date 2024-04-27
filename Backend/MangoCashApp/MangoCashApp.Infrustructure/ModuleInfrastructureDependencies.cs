using MangoCashApp.Infrustructure.Abstracts;
using MangoCashApp.Infrustructure.InfrustractureBases;
using MangoCashApp.Infrustructure.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace MangoCashApp.Infrustructure
{
    public static class ModuleInfrastructureDependencies
    {
        public static IServiceCollection AddInfrastructureDependencies(this IServiceCollection services)
        {
            services.AddTransient<IAccountRepository, AccountRepository>();
            services.AddTransient(typeof(IGenericRepositoryAsync<>), typeof(GenericRepositoryAsync<>));
            return services;
        }
    }
}
