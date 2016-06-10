using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TouristAttractions.Entities;

namespace TouristAttractions.Controllers
{
    [Route("api/[controller]")]
    public class AttractionsController : Controller
    {
        private static List<Attraction> Attractions = new List<Attraction>()
        {
            new Attraction() { Id = 11, Name = "Mr. Valentin" },
            new Attraction() { Id = 12, Name = "Narco" },
            new Attraction() { Id = 13, Name = "Bombasto" },
            new Attraction() { Id = 14, Name = "Celeritas" },
            new Attraction() { Id = 15, Name = "Magneta" },
            new Attraction() { Id = 16, Name = "RubberMan" },
            new Attraction() { Id = 17, Name = "Dynama" },
            new Attraction() { Id = 18, Name = "Dr IQ" },
            new Attraction() { Id = 19, Name = "Magma" },
            new Attraction() { Id = 20, Name = "Tornado" }
        };

        // GET api/attractions
        [HttpGet]
        public IEnumerable<Attraction> Get()
        {
            return Attractions;
        }

        // GET api/attractions/5
        [HttpGet("{id}")]
        public Attraction Get(int id)
        {
            return Attractions.FirstOrDefault(e => e.Id == id);
        }

        // POST api/attractions
        [HttpPost]
        public Attraction Post([FromBody]Attraction attraction)
        {
            if (!String.IsNullOrWhiteSpace(attraction.Name))
            {
                attraction.Id = Attractions.Last().Id + 1;
                Attractions.Add(attraction);
                return attraction;
            }
            else
                throw new Exception("Invalid data");
        }

        // PUT api/attractions/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Attraction attraction)
        {
            Attraction attractionToUpdate = Attractions.FirstOrDefault(e => e.Id == id);

            attractionToUpdate.Name = attraction.Name;
        }

        // DELETE api/attractions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Attractions.Remove(Attractions.FirstOrDefault(e => e.Id == id));
        }
    }
}
