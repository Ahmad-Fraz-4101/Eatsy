using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EatsyMobileApp.Models;

[Table("Main_Categories")]
public partial class MainCategory
{
    [Key]
    [Column("main_category_id")]
    public int MainCategoryId { get; set; }

    [Column("name")]
    [StringLength(50)]
    [Unicode(false)]
    public string Name { get; set; } = null!;

    [InverseProperty("MainCategory")]
    public virtual ICollection<Subcategory> Subcategories { get; set; } = new List<Subcategory>();
}
