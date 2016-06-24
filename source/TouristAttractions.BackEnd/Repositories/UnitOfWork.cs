using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TouristAttractions.Entities;

namespace TouristAttractions.Repositories
{
    public interface IUnitOfWork : IDisposable
    {
        void Save();
    }

    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        public AttractionsDbContext context;
        
        public UnitOfWork(AttractionsDbContext dbContext)
        {
            this.context = dbContext;
        }

        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
