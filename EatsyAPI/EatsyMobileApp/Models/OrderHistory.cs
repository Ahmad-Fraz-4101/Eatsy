using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EatsyMobileApp.Models;

[Table("Order_History")]
public partial class OrderHistory
{
    [Key]
    [Column("history_id")]
    public int HistoryId { get; set; }

    [Column("order_id")]
    public int? OrderId { get; set; }

    [Column("user_id")]
    [StringLength(255)]
    [Unicode(false)]
    public string? UserId { get; set; }

    [Column("order_date", TypeName = "datetime")]
    public DateTime? OrderDate { get; set; }

    [ForeignKey("OrderId")]
    [InverseProperty("OrderHistories")]
    public virtual Order? Order { get; set; }

    [ForeignKey("UserId")]
    [InverseProperty("OrderHistories")]
    public virtual User? User { get; set; }
}
