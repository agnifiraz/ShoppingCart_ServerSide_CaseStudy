using Casestudy.DAL.DomainClasses;
using System.Text.Json;
namespace Casestudy.DAL
{
    public class DataUtility
    {
        private readonly AppDbContext _db;
        public DataUtility(AppDbContext context)
        {
            _db = context;
        }

        public async Task<bool> LoadNutritionInfoFromWebToDb(string stringJson)
        {
            bool brandsLoaded = false;
            bool productsLoaded = false;
            try
            {
                // an element that is typed as dynamic is assumed to support any operation
                dynamic? objectJson = JsonSerializer.Deserialize<Object>(stringJson);
                brandsLoaded = await LoadBrands(objectJson);
                productsLoaded = await LoadProducts(objectJson);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return brandsLoaded && productsLoaded;
        }

        private async Task<bool> LoadBrands(dynamic jsonObjectArray)
        {
            bool loadedBrands = false;
            try
            {
                // clear out the old rows
                _db.Brands?.RemoveRange(_db.Brands);
                await _db.SaveChangesAsync();
                List<String> allBrands = new();
                foreach (JsonElement element in jsonObjectArray.EnumerateArray())
                {
                    if (element.TryGetProperty("Brand", out JsonElement productJson))
                    {
                        allBrands.Add(productJson.GetString()!);
                    }
                }
                IEnumerable<String> brands = allBrands.Distinct<String>();
                foreach (string catname in brands)
                {
                    Brand cat = new();
                    cat.Name = catname;
                    await _db.Brands!.AddAsync(cat);
                    await _db.SaveChangesAsync();
                }
                loadedBrands = true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error - " + ex.Message);
            }
            return loadedBrands;
        }


        private async Task<bool> LoadProducts(dynamic jsonObjectArray)
        {
            bool loadedProducts = false;
            try
            {
                List<Brand> brands = _db.Brands!.ToList();
                // clear outthe old
                _db.Products?.RemoveRange(_db.Products);
                await _db.SaveChangesAsync();
                foreach (JsonElement element in jsonObjectArray.EnumerateArray())
                {
                    Product product = new();
                    product.ProductName = element.GetProperty("ProductName").GetString();
                    product.GraphicName = element.GetProperty("GraphicName").GetString();
                    product.CostPrice = Convert.ToDecimal(element.GetProperty("CostPrice").GetString());
                    product.MSRP = Convert.ToDecimal(element.GetProperty("MSRP").GetString());
                    product.QtyOnHand = Convert.ToInt32(element.GetProperty("QtyOnHand").GetString());
                    product.QtyOnBackOrder = Convert.ToInt32(element.GetProperty("QtyOnBackOrder").GetString());
                    product.Description = element.GetProperty("Description").GetString();
                    string? bra = element.GetProperty("Brand").GetString();
                    // add the FK here
                    foreach (Brand brand in brands)
                    {
                        if (brand.Name == bra)
                        {
                            product.Brand = brand;
                            break;
                        }
                    }
                    await _db.Products!.AddAsync(product);
                    await _db.SaveChangesAsync();
                }
                loadedProducts = true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error - " + ex.Message);
            }
            return loadedProducts;
        }

    }
}

