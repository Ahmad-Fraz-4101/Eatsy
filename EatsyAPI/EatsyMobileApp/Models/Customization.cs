using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EatsyMobileApp.Models;

public partial class Customization
{
    [Key]
    [Column("customization_id")]
    public int CustomizationId { get; set; }

    [Column("dish_id")]
    public int? DishId { get; set; }

    [Column("name")]
    [StringLength(100)]
    [Unicode(false)]
    public string Name { get; set; } = null!;

    [Column("extra_price", TypeName = "decimal(10, 2)")]
    public decimal ExtraPrice { get; set; }

    [ForeignKey("DishId")]
    [InverseProperty("Customizations")]
    public virtual Dish? Dish { get; set; }
}
