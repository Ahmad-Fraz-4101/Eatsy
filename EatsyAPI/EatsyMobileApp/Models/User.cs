using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EatsyMobileApp.Models;

[Index("Email", Name = "UQ__Users__AB6E6164447C33CC", IsUnique = true)]
public partial class User
{
    [Key]
    [Column("user_id")]
    [StringLength(255)]
    [Unicode(false)]
    public string UserId { get; set; } = null!;

    [Column("username")]
    [StringLength(50)]
    [Unicode(false)]
    public string Username { get; set; } = null!;

    [Column("email")]
    [StringLength(100)]
    [Unicode(false)]
    public string Email { get; set; } = null!;

    [Column("role")]
    [StringLength(50)]
    [Unicode(false)]
    public string Role { get; set; } = null!;

    [Column("loyalty_points")]
    public int? LoyaltyPoints { get; set; }

    [Column("created_at")]
    public byte[] CreatedAt { get; set; } = null!;

    [InverseProperty("User")]
    public virtual ICollection<Notification> Notifications { get; set; } = new List<Notification>();

    [InverseProperty("User")]
    public virtual ICollection<OrderHistory> OrderHistories { get; set; } = new List<OrderHistory>();

    [InverseProperty("User")]
    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    [InverseProperty("User")]
    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    [InverseProperty("User")]
    public virtual ICollection<TableReservation> TableReservations { get; set; } = new List<TableReservation>();
}
