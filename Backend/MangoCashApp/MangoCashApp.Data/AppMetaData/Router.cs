using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Data.AppMetaData
{
    public class Router
    {
        public const string root = "Api";
        public const string version = "V1";
        public const string Rule = root + "/" + version + "/";

        public static class AccountRouting
        {
            public const string Prefix = Rule + "Account";
            public const string List = Prefix + "/List";
            public const string GetById = Prefix + "/{id}";
            public const string SignUp = Prefix + "/SignUp";
            public const string Login = Prefix + "/Login";
        }

        public static class TransactionRouting
        {
            public const string Prefix = Rule + "Transaction";
            public const string Transaction = Prefix + "/Transaction";
        }
    }
}
