using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Data.Entities
{
    public class Transaction
    {
        [Key]
        public Guid TransactionId { get; set; }= Guid.NewGuid();

        public Guid AccountId { get; set; }

        public string TransactionType { get; set; }

        public string? FromAccountName { get; set; }

        public string? ToAccountName { get; set; }

        public DateTime Date { get; set; }= DateTime.Now;
        public decimal Amount { get; set; }

        [ForeignKey("AccountId")]
        public virtual Account Account { get; set; }
    }
}
