using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TouristAttractions.Entities
{
    public class AttractionsDbContext : DbContext
    {
        public AttractionsDbContext(DbContextOptions<AttractionsDbContext> options)
            : base(options)
        { }

        public DbSet<Attraction> Attractions { get; set; }
        public DbSet<Section> Sections { get; set; }
    }
}
