﻿namespace Casestudy.Helpers
{
        public class OrderDetailsHelper
        {
            public int OrderId { get; set; }
            public string? ProductName { get; set; }
            public int Qty { get; set; }
            public string? Description { get; set; }
            public int CustomerId { get; set; }
            public string? OrderDate { get; set; }



        public decimal OrderAmount { get; set; }
        public int QtyOrdered { get; set; }
        public int QtySold { get; set; }
        public int QtyBackOrdered { get; set; }
        public decimal SellingPrice { get; set; }


    }


}
