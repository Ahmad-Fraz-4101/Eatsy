using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EatsyMobileApp.Models;

public partial class OrderAssignment
{
    [Key]
    [Column("assignment_id")]
    public int AssignmentId { get; set; }

    [Column("order_id")]
    public int OrderId { get; set; }

    [Column("delivery_person_id")]
    public int DeliveryPersonId { get; set; }

    [Column("assignment_time", TypeName = "datetime")]
    public DateTime? AssignmentTime { get; set; }

    [Column("delivery_status")]
    [StringLength(50)]
    [Unicode(false)]
    public string DeliveryStatus { get; set; } = null!;

    [Column("delivery_start_time", TypeName = "datetime")]
    public DateTime? DeliveryStartTime { get; set; }

    [Column("delivery_end_time", TypeName = "datetime")]
    public DateTime? DeliveryEndTime { get; set; }

    [ForeignKey("DeliveryPersonId")]
    [InverseProperty("OrderAssignments")]
    public virtual DeliveryPersonnel DeliveryPerson { get; set; } = null!;

    [ForeignKey("OrderId")]
    [InverseProperty("OrderAssignments")]
    public virtual Order Order { get; set; } = null!;
}
