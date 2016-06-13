using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TouristAttractions.Entities
{
    public class Section
    {
        public int OrderNum { get; set; }
        public string Header { get; set; }
        public string Content { get; set; }

        public Section() { }

        public Section(int orderNum, string header, string content)
        {
            this.OrderNum = orderNum;
            this.Header = header;
            this.Content = content;
        }
    }
}
