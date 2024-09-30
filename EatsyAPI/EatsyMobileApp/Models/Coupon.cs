using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EatsyMobileApp.Models;

public partial class Coupon
{
    [Key]
    [Column("coupon_code")]
    [StringLength(50)]
    [Unicode(false)]
    public string CouponCode { get; set; } = null!;

    [Column("discount_percent")]
    public int DiscountPercent { get; set; }

    [Column("expiration_date")]
    public DateOnly ExpirationDate { get; set; }

    [Column("status")]
    [StringLength(50)]
    [Unicode(false)]
    public string Status { get; set; } = null!;
}
