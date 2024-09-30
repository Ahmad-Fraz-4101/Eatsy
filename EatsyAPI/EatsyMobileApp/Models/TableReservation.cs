using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EatsyMobileApp.Models;

[Table("Table_Reservations")]
public partial class TableReservation
{
    [Key]
    [Column("reservation_id")]
    public int ReservationId { get; set; }

    [Column("user_id")]
    [StringLength(255)]
    [Unicode(false)]
    public string? UserId { get; set; }

    [Column("table_id")]
    public int? TableId { get; set; }

    [Column("reservation_time", TypeName = "datetime")]
    public DateTime ReservationTime { get; set; }

    [Column("number_of_people")]
    public int NumberOfPeople { get; set; }

    [Column("status")]
    [StringLength(50)]
    [Unicode(false)]
    public string Status { get; set; } = null!;

    [Column("created_at", TypeName = "datetime")]
    public DateTime? CreatedAt { get; set; }

    [ForeignKey("TableId")]
    [InverseProperty("TableReservations")]
    public virtual Table? Table { get; set; }

    [ForeignKey("UserId")]
    [InverseProperty("TableReservations")]
    public virtual User? User { get; set; }
}
