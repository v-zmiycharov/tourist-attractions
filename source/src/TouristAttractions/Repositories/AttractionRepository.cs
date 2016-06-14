using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TouristAttractions.Entities;
using TouristAttractions.Helpers;

namespace TouristAttractions.Repositories
{
    public interface IAttractionRepository : IGenericRepository<Attraction>
    {
    }

    public class AttractionRepository : GenericRepository<Attraction>, IAttractionRepository 
    {
        public AttractionRepository(IUnitOfWork uow)
            : base(uow)
        {
        }
    }
}
