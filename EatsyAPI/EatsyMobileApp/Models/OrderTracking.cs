using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EatsyMobileApp.Models;

[Table("Order_Tracking")]
public partial class OrderTracking
{
    [Key]
    [Column("tracking_id")]
    public int TrackingId { get; set; }

    [Column("order_id")]
    public int OrderId { get; set; }

    [Column("status")]
    [StringLength(50)]
    [Unicode(false)]
    public string Status { get; set; } = null!;

    [Column("updated_at", TypeName = "datetime")]
    public DateTime? UpdatedAt { get; set; }

    [ForeignKey("OrderId")]
    [InverseProperty("OrderTrackings")]
    public virtual Order Order { get; set; } = null!;
}
