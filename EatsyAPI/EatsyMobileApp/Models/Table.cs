using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EatsyMobileApp.Models;

public partial class Table
{
    [Key]
    [Column("table_id")]
    public int TableId { get; set; }

    [Column("table_number")]
    public int TableNumber { get; set; }

    [Column("capacity")]
    public int Capacity { get; set; }

    [Column("status")]
    [StringLength(50)]
    [Unicode(false)]
    public string Status { get; set; } = null!;

    [InverseProperty("Table")]
    public virtual ICollection<TableReservation> TableReservations { get; set; } = new List<TableReservation>();
}
