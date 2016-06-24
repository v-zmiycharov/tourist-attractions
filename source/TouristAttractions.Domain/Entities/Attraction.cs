using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TouristAttractions.Entities
{
    public class Attraction
    {
        public int AttractionId { get; set; }
        public string Name { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public List<Section> Sections { get; set; }

        public Attraction() { }

        public Attraction(int attractionId, string name, double longitude, double latitude, string city, string country, List<Section> sections)
        {
            this.AttractionId = attractionId;
            this.Name = name;
            this.Longitude = longitude;
            this.Latitude = latitude;
            this.City = city;
            this.Country = country;
            this.Sections = sections;

            if (this.Sections != null)
            {
                for (int i = 0; i < this.Sections.Count; i++)
                {
                    this.Sections[i].OrderNum = i + 1;
                }
            }
        }

        public void Update(Attraction attraction)
        {
            this.Name = attraction.Name;
            this.Longitude = attraction.Longitude;
            this.Latitude = attraction.Latitude;
            this.City = attraction.City;
            this.Country = attraction.Country;
        }
    }
}
