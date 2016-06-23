using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using TouristAttractions.Entities;
using TouristAttractions.Helpers;

namespace TouristAttractions.Repositories
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        IQueryable<TEntity> Get();

        TEntity GetSingleByID(object id);

        IQueryable<TEntity> GetByID(object id);

        void Insert(TEntity entity);

        void Delete(object id);

        void Delete(TEntity entityToDelete);

        void Update(TEntity entityToUpdate);
    }

    public class GenericRepository<TEntity> : BaseRepository where TEntity : class
    {
        internal DbSet<TEntity> dbSet;

        public GenericRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            this.dbSet = this.UnitOfWork.context.Set<TEntity>();
        }
        
        public virtual IQueryable<TEntity> Get()
        {
            IQueryable<TEntity> query = dbSet;

            return query;
        }

        public virtual TEntity GetSingleByID(object id)
        {
            return dbSet.FindSingle(id);
        }

        public virtual IQueryable<TEntity> GetByID(object id)
        {
            return dbSet.Find(id);
        }
        
        public virtual void Insert(TEntity entity)
        {
            dbSet.Add(entity);
        }

        public virtual void Delete(object id)
        {
            TEntity entityToDelete = dbSet.FindSingle(id);
            Delete(entityToDelete);
        }

        public virtual void Delete(TEntity entityToDelete)
        {
            if (this.UnitOfWork.context.Entry(entityToDelete).State == EntityState.Detached)
            {
                dbSet.Attach(entityToDelete);
            }
            dbSet.Remove(entityToDelete);
        }

        public virtual void Update(TEntity entityToUpdate)
        {
            dbSet.Attach(entityToUpdate);
            this.UnitOfWork.context.Entry(entityToUpdate).State = EntityState.Modified;
        }
    }
}
