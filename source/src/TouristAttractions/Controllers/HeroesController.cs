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
    }
}
