using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace TouristAttractions.Helpers
{
    public static class Extensions
    {
        public static IQueryable<TEntity> Find<TEntity>(this DbSet<TEntity> set, params object[] keyValues) where TEntity : class
        {
            var context = set.GetService<ICurrentDbContext>().Context;

            var entityType = context.Model.FindEntityType(typeof(TEntity));
            var key = entityType.FindPrimaryKey();
            
            var parameter = Expression.Parameter(typeof(TEntity), "x");
            var query = set.AsQueryable();
            int i = 0;
            foreach (var property in key.Properties)
            {
                var i1 = i;
                query = query.Where((Expression<Func<TEntity, bool>>)
                 Expression.Lambda(
                     Expression.Equal(
                         Expression.Property(parameter, property.Name),
                         Expression.Constant(keyValues[i1])),
                     parameter));
                i++;
            }
            
            return query;
        }

        public static TEntity FindSingle<TEntity>(this DbSet<TEntity> set, params object[] keyValues) where TEntity : class
        {
            return Find(set, keyValues).FirstOrDefault();
        }
    }
}
