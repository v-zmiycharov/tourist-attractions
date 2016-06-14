using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TouristAttractions.Entities;
using TouristAttractions.Repositories;

namespace TouristAttractions.Controllers
{
    [Route("api/[controller]")]
    public class AttractionsController : BaseController
    {
        private IAttractionRepository _attractionRepository;

        public AttractionsController(IUnitOfWork unitOfWork, IAttractionRepository attractionsRepository)
            : base(unitOfWork)
        {
            _attractionRepository = attractionsRepository;
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
            return _attractionRepository.GetByID(id);
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
            Attraction attractionToUpdate = _attractionRepository.GetByID(id);

            attractionToUpdate.Update(attraction);

            _unitOfWork.Save();
        }

        // DELETE api/attractions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _attractionRepository.Delete(_attractionRepository.GetByID(id));
            _unitOfWork.Save();
        }
    }
}
