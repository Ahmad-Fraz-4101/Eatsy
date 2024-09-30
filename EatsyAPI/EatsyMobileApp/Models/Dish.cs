using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace EatsyMobileApp.Models;

public partial class Dish
{
    [Key]
    [Column("dish_id")]
    public int DishId { get; set; }

    [Column("subcategory_id")]
    public int? SubcategoryId { get; set; }

    [Column("name")]
    [StringLength(100)]
    [Unicode(false)]
    public string Name { get; set; } = null!;

    [Column("description", TypeName = "text")]
    public string? Description { get; set; }

    [Column("price", TypeName = "decimal(10, 2)")]
    public decimal Price { get; set; }

    [Column("image_url")]
    [StringLength(255)]
    [Unicode(false)]
    public string? ImageUrl { get; set; }

    [Column("preparation_time")]
    public int? PreparationTime { get; set; }

    [Column("allergens", TypeName = "text")]
    public string? Allergens { get; set; }

    [Column("popularity_score")]
    public int? PopularityScore { get; set; }

    [InverseProperty("Dish")]
    public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();

    [InverseProperty("Dish")]
    public virtual ICollection<Customization> Customizations { get; set; } = new List<Customization>();

    [InverseProperty("Dish")]
    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    [ForeignKey("SubcategoryId")]
    [InverseProperty("Dishes")]
    
    public virtual Subcategory? Subcategory { get; set; }

    [ForeignKey("DishId")]
    [InverseProperty("Dishes")]
    public virtual ICollection<Ingredient> Ingredients { get; set; } = new List<Ingredient>();
}
