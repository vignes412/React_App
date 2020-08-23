using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MochaChaiPOC.modal;

namespace MochaChaiPOC.Respository
{
    public interface IuserRespository
    {
        IEnumerable<user> GetAll();
    }
}
