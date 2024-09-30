using EatsyMobileApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace EatsyMobileApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DishesController : ControllerBase
    {
        private readonly EatsyDbContext _context;

        public DishesController(EatsyDbContext context)
        {
            _context = context;
        }

        // GET: api/Dishes/Continental
        [HttpGet("continental")]
        public async Task<ActionResult<IEnumerable<Dish>>> GetContinentalDishes()
        {
            // Query to retrieve all dishes from the "Continental" main category
            var continentalDishes = await _context.Dishes
                .Include(d => d.Subcategory)
                .ThenInclude(s => s.MainCategory)
                .Where(d => d.Subcategory.MainCategory.Name == "Continental")
                .ToListAsync();

            // Check if there are no dishes
            if (continentalDishes == null || continentalDishes.Count == 0)
            {
                return NotFound("No dishes found for the Continental category.");
            }

            return Ok(continentalDishes);
        }

        //GET: pasta dishes
        // In your DishesController in the backend
        [HttpGet("pasta")]
        public async Task<ActionResult<IEnumerable<DishItemDto>>> GetPastaDishes()
        {
            var pastaDishes = await _context.Dishes
                .Include(d => d.Subcategory)
                .Where(d => d.Subcategory.Name == "Pasta")
                .Select(d => new DishItemDto
                {
                    DishId = d.DishId,
                    Name = d.Name,
                    Price = d.Price,
                    Description = d.Description
                })
                .ToListAsync();

            return Ok(pastaDishes);
        }

        //GET: Steak dishes
        // In your DishesController in the backend
        [HttpGet("steak")]
        public async Task<ActionResult<IEnumerable<DishItemDto>>> GetSteakDishes()
        {
            var pastaDishes = await _context.Dishes
                .Include(d => d.Subcategory)
                .Where(d => d.Subcategory.Name == "Steak")
                .Select(d => new DishItemDto
                {
                    DishId = d.DishId,
                    Name = d.Name,
                    Price = d.Price,
                    Description = d.Description
                })
                .ToListAsync();

            return Ok(pastaDishes);
        }

        //GET: Salad dishes
        // In your DishesController in the backend
        [HttpGet("Salad")]
        public async Task<ActionResult<IEnumerable<DishItemDto>>> GetSaladDishes()
        {
            var pastaDishes = await _context.Dishes
                .Include(d => d.Subcategory)
                .Where(d => d.Subcategory.Name == "Salad")
                .Select(d => new DishItemDto
                {
                    DishId = d.DishId,
                    Name = d.Name,
                    Price = d.Price,
                    Description = d.Description
                })
                .ToListAsync();

            return Ok(pastaDishes);

        }

        //GET: Dessert dishes
        // In your DishesController in the backend
        [HttpGet("dessert")]
        public async Task<ActionResult<IEnumerable<DishItemDto>>> GetDessertDishes()
        {
            var pastaDishes = await _context.Dishes
                .Include(d => d.Subcategory)
                .Where(d => d.Subcategory.Name == "Dessert")
                .Select(d => new DishItemDto
                {
                    DishId = d.DishId,
                    Name = d.Name,
                    Price = d.Price,
                    Description = d.Description
                })
                .ToListAsync();

            return Ok(pastaDishes);
        }

    }
}
