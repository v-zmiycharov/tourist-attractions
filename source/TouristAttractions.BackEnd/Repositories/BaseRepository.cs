using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TouristAttractions.Repositories
{
    public class BaseRepository
    {
        protected UnitOfWork UnitOfWork { get; set; }

        public BaseRepository(IUnitOfWork unitOfWork)
        {
            this.UnitOfWork = (UnitOfWork)unitOfWork;
        }
    }
}
