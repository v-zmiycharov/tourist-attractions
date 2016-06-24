using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TouristAttractions.Entities;
using TouristAttractions.Repositories;
using Microsoft.EntityFrameworkCore;

namespace TouristAttractions.Controllers
{
    [Route("api/[controller]")]
    public class AttractionsController : BaseController
    {
        private IAttractionRepository _attractionRepository;
        private ISectionRepository _sectionRepository;

        public AttractionsController(IUnitOfWork unitOfWork, IAttractionRepository attractionRepository, ISectionRepository sectionRepository)
            : base(unitOfWork)
        {
            _attractionRepository = attractionRepository;
            _sectionRepository = sectionRepository;
        }

        // GET api/attractions
        [HttpGet]
        public IEnumerable<Attraction> Get()
        {
            return _attractionRepository.Get();
        }

        // GET api/attractions/5
        [HttpGet("{id}")]
        public Attraction Get(int id)
        {
            return _attractionRepository.GetByID(id)
                        .Include(e => e.Sections)
                        .FirstOrDefault();
        }

        // POST api/attractions
        [HttpPost]
        public Attraction Post([FromBody]Attraction attraction)
        {
            if (!String.IsNullOrWhiteSpace(attraction.Name))
            {
                _attractionRepository.Insert(attraction);
                _unitOfWork.Save();
                return attraction;
            }
            else
                throw new Exception("Invalid data");
        }

        // PUT api/attractions/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Attraction attraction)
        {
            Attraction attractionToUpdate = _attractionRepository.GetSingleByID(id);

            attractionToUpdate.Update(attraction);
            _sectionRepository.UpdateAttractionSections(id, attraction.Sections);

            _unitOfWork.Save();
        }

        // DELETE api/attractions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _attractionRepository.Delete(id);
            _unitOfWork.Save();
        }
    }
}
