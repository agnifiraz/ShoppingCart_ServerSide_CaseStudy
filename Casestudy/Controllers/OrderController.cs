﻿using Casestudy.DAL;
using Casestudy.DAL.DAO;
using Casestudy.DAL.DomainClasses;
using Microsoft.AspNetCore.Mvc;
using Casestudy.Helpers;
using Microsoft.AspNetCore.Authorization;
namespace Casestudy.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        readonly AppDbContext _ctx;
        public OrderController(AppDbContext context) // injected here
        {
            _ctx = context;
        }
        [HttpPost]
        [Produces("application/json")]
        public async Task<ActionResult<string>> Index(OrderHelper helper)
        {
            string retVal;
            try
            {
                CustomerDAO uDao = new(_ctx);
                Customer? orderOwner = await uDao.GetByEmail(helper.Email);
                OrderDAO tDao = new(_ctx);
                int orderId = await tDao.AddOrder(orderOwner!.Id, helper.Selections!);
                retVal = orderId > 0
                ? "Order " + orderId + " Created! Goods backordered!"
               : "Order not Created";
            }
            catch (Exception ex)
            {
                retVal = "Order not saved " + ex.Message;
            }
            return retVal;
        }


        [Route("{email}")]
        [HttpGet]
        public async Task<ActionResult<List<Order>>> List(string email)
        {
            List<Order> orders; ;
            CustomerDAO uDao = new(_ctx);
            Customer? orderOwner = await uDao.GetByEmail(email);
            OrderDAO tDao = new(_ctx);
            orders = await tDao.GetAll(orderOwner!.Id);
            return orders;
        }


        [Route("{orderid}/{email}")]
        [HttpGet]
        public async Task<ActionResult<List<OrderDetailsHelper>>> GetOrderDetails(int orderid, string email)
        {
            OrderDAO dao = new(_ctx);
            return await dao.GetOrderDetails(orderid, email);
        }


    }
}
