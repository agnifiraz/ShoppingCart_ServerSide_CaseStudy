using Casestudy.DAL;
using Casestudy.DAL.DAO;
using Casestudy.DAL.DomainClasses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace Casestudy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProductController : ControllerBase
    {
        readonly AppDbContext _db;
        public ProductController(AppDbContext context)
        {
            _db = context;
        }
        [HttpGet]
        [Route("{catid}")]
        public async Task<ActionResult<List<Product>>> Index(int catid)
        {
            ProductDAO dao = new(_db);
            List<Product> itemsForBrand = await dao.GetAllByBrand(catid);
            return itemsForBrand;
        }
    }
}
