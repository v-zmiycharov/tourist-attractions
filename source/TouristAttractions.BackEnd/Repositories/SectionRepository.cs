using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TouristAttractions.Entities;
using TouristAttractions.Helpers;

namespace TouristAttractions.Repositories
{
    public interface ISectionRepository : IGenericRepository<Section>
    {
        void UpdateAttractionSections(int attractionId, List<Section> sections);
        IQueryable<Section> FindByAttractionId(int attractionId);
    }

    public class SectionRepository : GenericRepository<Section>, ISectionRepository
    {
        public SectionRepository(IUnitOfWork uow)
            : base(uow)
        {
        }

        public void UpdateAttractionSections(int attractionId, List<Section> sections)
        {
            if (sections != null)
            {
                for (int i = 0; i < sections.Count; i++)
                {
                    sections[i].OrderNum = i + 1;
                    sections[i].AttractionId = attractionId;
                }
            }

            // Delete / Update old sections
            var oldSections = dbSet.Where(e => e.AttractionId == attractionId).ToList();
            foreach(var oldSec in oldSections)
            {
                var foundSection = sections.FirstOrDefault(e => e.SectionId == oldSec.SectionId);

                if (foundSection == null)
                    dbSet.Remove(oldSec);
                else
                {
                    oldSec.Update(foundSection);
                    dbSet.Update(oldSec);
                }
            }

            foreach(var newSec in sections.Where(e => !oldSections.Any(old => old.SectionId == e.SectionId)))
            {
                dbSet.Add(newSec);
            }
        }

        public IQueryable<Section> FindByAttractionId(int attractionId)
        {
            return dbSet.Where(e => e.AttractionId == attractionId);
        }
    }
}
