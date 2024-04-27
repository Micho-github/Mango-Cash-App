using MangoCashApp.Infrustructure.Abstracts;
using MangoCashApp.Infrustructure.Repositories;
using MangoCashApp.Service.Abstracts;
using MangoCashApp.Service.Implementations;
using Microsoft.Extensions.DependencyInjection;

namespace MangoCashApp.Service
{
    public static class ModuleServiceDependencies
    {
        public static IServiceCollection AddServiceDependencies(this IServiceCollection services)
        {
            services.AddTransient<IAccountService, AccountService>();
            return services;
        }

    }
}
