using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TouristAttractions.Entities;

namespace TouristAttractions.Controllers
{
    [Route("api/[controller]")]
    public class HeroesController : Controller
    {
        private static List<Hero> Heroes = new List<Hero>()
        {
            new Hero() { Id = 11, Name = "Mr. Valentin" },
            new Hero() { Id = 12, Name = "Narco" },
            new Hero() { Id = 13, Name = "Bombasto" },
            new Hero() { Id = 14, Name = "Celeritas" },
            new Hero() { Id = 15, Name = "Magneta" },
            new Hero() { Id = 16, Name = "RubberMan" },
            new Hero() { Id = 17, Name = "Dynama" },
            new Hero() { Id = 18, Name = "Dr IQ" },
            new Hero() { Id = 19, Name = "Magma" },
            new Hero() { Id = 20, Name = "Tornado" }
        };

        // GET api/heroes
        [HttpGet]
        public IEnumerable<Hero> Get()
        {
            return Heroes;
        }

        // GET api/heroes/5
        [HttpGet("{id}")]
        public Hero Get(int id)
        {
            return Heroes.FirstOrDefault(e => e.Id == id);
        }

        // POST api/heroes
        [HttpPost]
        public Hero Post([FromBody]Hero hero)
        {
            if (!String.IsNullOrWhiteSpace(hero.Name))
            {
                hero.Id = Heroes.Last().Id + 1;
                Heroes.Add(hero);
                return hero;
            }
            else
                throw new Exception("Invalid data");
        }

        // PUT api/heroes/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Hero hero)
        {
            Hero heroToUpdate = Heroes.FirstOrDefault(e => e.Id == id);

            heroToUpdate.Name = hero.Name;
        }

        // DELETE api/heroes/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Heroes.Remove(Heroes.FirstOrDefault(e => e.Id == id));
        }
    }
}
