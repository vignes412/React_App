using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MochaChaiPOC.modal
{
    public class Dbcontext: DbContext
    {
        public Dbcontext(DbContextOptions<Dbcontext> options)
            :base(options) { }
        public Dbcontext() { }
        public DbSet<user> ReactTable { get; set; }
    }
}
