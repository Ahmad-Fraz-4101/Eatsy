using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EatsyMobileApp.Models;

[Table("Cart_Items")]
public partial class CartItem
{
    [Key]
    [Column("order_item_id")]
    public int OrderItemId { get; set; }

    [Column("order_id")]
    public int? OrderId { get; set; }

    [Column("dish_id")]
    public int? DishId { get; set; }

    [Column("quantity")]
    public int Quantity { get; set; }

    [Column("customization", TypeName = "text")]
    public string? Customization { get; set; }

    [Column("price", TypeName = "decimal(10, 2)")]
    public decimal Price { get; set; }

    [ForeignKey("DishId")]
    [InverseProperty("CartItems")]
    public virtual Dish? Dish { get; set; }

    [ForeignKey("OrderId")]
    [InverseProperty("CartItems")]
    public virtual Order? Order { get; set; }
}
