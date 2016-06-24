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
        private ISectionRepository _sectionRepository;

        public AttractionRepository(IUnitOfWork uow, ISectionRepository sectionRepository)
            : base(uow)
        {
            _sectionRepository = sectionRepository;
        }

        override public void Delete(object id)
        {
            var sections = _sectionRepository.FindByAttractionId((int)id).ToList();

            if(sections != null)
            {
                foreach(var section in sections)
                {
                    _sectionRepository.Delete(section.SectionId);
                }
            }

            base.Delete(id);
        }
    }
}
