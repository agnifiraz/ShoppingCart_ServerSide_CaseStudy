using Casestudy.DAL.DomainClasses;
using Casestudy.Helpers;
using Microsoft.EntityFrameworkCore;

namespace Casestudy.DAL.DAO
{
    public class OrderDAO
    {
        private readonly AppDbContext _db;
        public OrderDAO(AppDbContext ctx)
        {
            _db = ctx;
        }
        public async Task<int> AddOrder(int customerid, OrderSelectionHelper[] selections)
        {
            int orderId = -1;
            // we need a transaction as multiple entities involved
            using (var _trans = await _db.Database.BeginTransactionAsync())
            {
                try
                {
                    Order order = new();
                    Product product = new();
                    decimal scv = 0;

                    order.OrderDate = System.DateTime.Now;
                    
                    order.OrderAmount = 0.0M;
                    order.CustomerId = customerid;
                 
                    // calculate the totals and then add the order row to the table

                    foreach (OrderSelectionHelper selection in selections)
                    {
                        scv += selection.Item!.MSRP * selection.Qty;

                    }
                    order.OrderAmount = scv;
                    await _db.Orders!.AddAsync(order);
                    await _db.SaveChangesAsync();
                    // then add each item to the OrderLineItems table
                    foreach (OrderSelectionHelper selection in selections)
                    {
                        OrderLineItem tItem = new();
                        tItem.Product = _db.Products!.FirstOrDefault(p => p.Id == selection.Item!.Id);
                        tItem.OrderId = order.Id;
                        
                        if (tItem.Product!.QtyOnHand > selection.Qty)
                        {
                            tItem.Product.Id = selection.Item!.Id;
                            tItem.Product.QtyOnHand = tItem.Product.QtyOnHand - selection.Qty;
                            tItem.QtySold = selection.Qty;
                            tItem.QtyOrdered = selection.Qty;
                            tItem.QtyBackOrdered = 0;
                            tItem.SellingPrice = tItem.Product.MSRP;

                        }
                        else
                        {
                            tItem.QtyBackOrdered=selection.Qty-tItem.Product.QtyOnHand;
                            tItem.Product.QtyOnBackOrder = tItem.Product.QtyOnBackOrder + (selection.Qty - tItem.Product.QtyOnHand);
                            tItem.Product.QtyOnHand = 0;
                            tItem.QtyOrdered = selection.Qty;
                            tItem.QtySold = tItem.QtyOrdered - tItem.QtyBackOrdered;
                            tItem.SellingPrice = tItem.Product.MSRP;


                        }



                        await _db.OrderLineItems!.AddAsync(tItem);
                        await _db.SaveChangesAsync();
                    }
                    // test trans by uncommenting out these 3 lines
                    //int x = 1;
                    //int y = 0;
                    //x = x / y; 
                    await _trans.CommitAsync();
                    orderId = order.Id;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await _trans.RollbackAsync();
                }
            }
            return orderId;
        }

        public async Task<List<Order>> GetAll(int id)
        {
            return await _db.Orders!.Where(order => order.CustomerId == id).ToListAsync<Order>();
        }


        public async Task<List<OrderDetailsHelper>> GetOrderDetails(int tid, string email)
        {
            Customer? customer = _db.Customers!.FirstOrDefault(customer => customer.Email == email);
            List<OrderDetailsHelper> allDetails = new();
            // LINQ way of doing INNER JOINS
            var results = from t in _db.Orders
                          join ti in _db.OrderLineItems! on t.Id equals ti.OrderId
                          join mi in _db.Products! on ti.ProductId equals mi.Id
                          where (t.CustomerId == customer!.Id && t.Id == tid)
                          select new OrderDetailsHelper
                          {
                              SellingPrice = ti.SellingPrice,
                              OrderAmount = t.OrderAmount,
                              QtySold = ti.QtySold,
                              QtyOrdered = ti.QtyOrdered,
                              QtyBackOrdered = ti.QtyBackOrdered,
                              OrderId = t.Id,
                              CustomerId = customer!.Id,
                              Description = mi.Description,
                              ProductName = ti.Product!.ProductName,
                              Qty = ti.QtyOrdered,
                              OrderDate = t.OrderDate.ToString("yyyy/MM/dd - hh:mm tt")

                          };
            allDetails = await results.ToListAsync();
            return allDetails;
        }
    }
}
