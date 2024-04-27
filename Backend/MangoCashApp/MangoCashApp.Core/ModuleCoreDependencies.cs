using MangoCashApp.Service.Abstracts;
using MangoCashApp.Service.Implementations;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace MangoCashApp.Core
{
    public static class ModuleCoreDependencies
    {
        public static IServiceCollection AddCoreDependencies(this IServiceCollection services)
        {
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));
            return services;
        }
    }
}
