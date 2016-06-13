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
            new Attraction(11, "Eiffel Tower", 48.8583736, 2.2922926, "Paris", "France", new List<Section>() { new Section(1, "Description", "The best tower ever") } ),
            new Attraction(12, "Colosseum", 41.8902142, 12.4900422, "Italy", "Rome", new List<Section>() { new Section(1, "Description", "An ancient monument") } ),
            new Attraction(13, "Plitvice Lakes National Park", 44.8654004, 15.5798232, "", "Croatia", new List<Section>() { new Section(1, "Interesting", "The most famouse place in the whole country") } ),
            new Attraction(14, "Burj Khalifa", 25.1972018,55.2721877, "Dubai", "OAE", new List<Section>() { new Section(1, "Important", "The tallest building in the world") } ),
            new Attraction(15, "La Sagrada Familia", 41.4036339, 2.1721671, "Barcelona", "Spain", new List<Section>() { new Section(1, "Interesting", "It is not finished yet. In 2022 it will be done.") } ),
            new Attraction(16, "Charles Bridge", 50.086441,14.4116764, "Prague", "Czech Republic", new List<Section>() { new Section(1, "", "") } ),
            new Attraction(17, "Cologne Cathedral", 50.9412818, 6.9560927, "Cologne", "Germany", new List<Section>() { new Section(1, "", "") } ),
            new Attraction(18, "Cathedral Saint Alexandar Nevski", 42.6961218,23.3292795, "Sofia", "Bulgaria", new List<Section>() { new Section(1, "", "") } ),
            new Attraction(19, "Empire State Building", 40.7486946, -73.9903013, "New York", "USA", new List<Section>() { new Section(1, "", "") } ),
            new Attraction(20, "Potala Palace", 29.6554988, 91.1163905, "Tibet", "China", new List<Section>() { new Section(1, "", "") } ),
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

            attractionToUpdate.Update(attraction);
        }

        // DELETE api/attractions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Attractions.Remove(Attractions.FirstOrDefault(e => e.Id == id));
        }
    }
}
