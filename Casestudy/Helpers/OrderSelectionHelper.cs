﻿using Casestudy.DAL.DomainClasses;
namespace Casestudy.Helpers
{
    public class OrderSelectionHelper
    {
        public int Qty { get; set; }
        public Product? Item { get; set; }
        public string? ProductCode { get; set; }
    }
}