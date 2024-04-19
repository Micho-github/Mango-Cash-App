using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MangoCashApp.Data.Entities
{
    public class Account
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        [StringLength(15)] // Adjust maximum length as needed
        public string Username { get; set; }

        [Required]
        [EmailAddress] // Ensures valid email format
        public string UserEmail { get; set; }
        [Required]
        public string Password { get; set; }
        public int Phone { get; set; }
        public decimal Balance { get; set; }

    }
}
