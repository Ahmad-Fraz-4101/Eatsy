using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EatsyMobileApp.Models;

public partial class Subcategory
{
    [Key]
    [Column("subcategory_id")]
    public int SubcategoryId { get; set; }

    [Column("main_category_id")]
    public int? MainCategoryId { get; set; }

    [Column("name")]
    [StringLength(50)]
    [Unicode(false)]
    public string Name { get; set; } = null!;

    [InverseProperty("Subcategory")]
    public virtual ICollection<Dish> Dishes { get; set; } = new List<Dish>();

    [ForeignKey("MainCategoryId")]
    [InverseProperty("Subcategories")]
    public virtual MainCategory? MainCategory { get; set; }
}
