using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MochaChaiPOC.modal;

namespace MochaChaiPOC.Respository
{
    public class userRespository : IuserRespository
    {
        Dbcontext _context;
        public userRespository(Dbcontext context)
        {
            _context = context;
        }
        public IEnumerable<user> GetAll()
        {
            //ContactsList.Add(new Contacts() {FirstName ="Mithun", MobilePhone = "2345" });

            return _context.ReactTable.ToList();
        }

    }
}
