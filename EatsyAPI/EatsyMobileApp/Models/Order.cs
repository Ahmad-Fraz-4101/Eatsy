using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EatsyMobileApp.Models;

public partial class Order
{
    [Key]
    [Column("order_id")]
    public int OrderId { get; set; }

    [Column("user_id")]
    [StringLength(255)]
    [Unicode(false)]
    public string? UserId { get; set; }

    [Column("total_amount", TypeName = "decimal(10, 2)")]
    public decimal TotalAmount { get; set; }

    [Column("status")]
    [StringLength(50)]
    [Unicode(false)]
    public string Status { get; set; } = null!;

    [Column("delivery_type")]
    [StringLength(20)]
    [Unicode(false)]
    public string DeliveryType { get; set; } = null!;

    [Column("delivery_address", TypeName = "text")]
    public string? DeliveryAddress { get; set; }

    [Column("payment_method")]
    [StringLength(50)]
    [Unicode(false)]
    public string PaymentMethod { get; set; } = null!;

    [Column("created_at", TypeName = "datetime")]
    public DateTime? CreatedAt { get; set; }

    [InverseProperty("Order")]
    public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();

    [InverseProperty("AssignedOrder")]
    public virtual ICollection<DeliveryPersonnel> DeliveryPersonnel { get; set; } = new List<DeliveryPersonnel>();

    [InverseProperty("Order")]
    public virtual ICollection<OrderAssignment> OrderAssignments { get; set; } = new List<OrderAssignment>();

    [InverseProperty("Order")]
    public virtual ICollection<OrderHistory> OrderHistories { get; set; } = new List<OrderHistory>();

    [InverseProperty("Order")]
    public virtual ICollection<OrderTracking> OrderTrackings { get; set; } = new List<OrderTracking>();

    [ForeignKey("UserId")]
    [InverseProperty("Orders")]
    public virtual User? User { get; set; }
}
