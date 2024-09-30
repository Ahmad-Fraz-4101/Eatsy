using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EatsyMobileApp.Models;

public partial class DeliveryPersonnel
{
    [Key]
    [Column("delivery_person_id")]
    public int DeliveryPersonId { get; set; }

    [Column("name")]
    [StringLength(100)]
    [Unicode(false)]
    public string Name { get; set; } = null!;

    [Column("phone_number")]
    [StringLength(20)]
    [Unicode(false)]
    public string? PhoneNumber { get; set; }

    [Column("current_status")]
    [StringLength(50)]
    [Unicode(false)]
    public string CurrentStatus { get; set; } = null!;

    [Column("assigned_order_id")]
    public int? AssignedOrderId { get; set; }

    [ForeignKey("AssignedOrderId")]
    [InverseProperty("DeliveryPersonnel")]
    public virtual Order? AssignedOrder { get; set; }

    [InverseProperty("DeliveryPerson")]
    public virtual ICollection<OrderAssignment> OrderAssignments { get; set; } = new List<OrderAssignment>();
}
