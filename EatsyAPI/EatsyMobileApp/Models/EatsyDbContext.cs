using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace EatsyMobileApp.Models;

public partial class EatsyDbContext : DbContext
{
    public EatsyDbContext()
    {
    }

    public EatsyDbContext(DbContextOptions<EatsyDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<CartItem> CartItems { get; set; }

    public virtual DbSet<Coupon> Coupons { get; set; }

    public virtual DbSet<Customization> Customizations { get; set; }

    public virtual DbSet<DeliveryPersonnel> DeliveryPersonnel { get; set; }

    public virtual DbSet<Dish> Dishes { get; set; }

    public virtual DbSet<Ingredient> Ingredients { get; set; }

    public virtual DbSet<MainCategory> MainCategories { get; set; }

    public virtual DbSet<Notification> Notifications { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderAssignment> OrderAssignments { get; set; }

    public virtual DbSet<OrderHistory> OrderHistories { get; set; }

    public virtual DbSet<OrderTracking> OrderTrackings { get; set; }

    public virtual DbSet<Review> Reviews { get; set; }

    public virtual DbSet<Subcategory> Subcategories { get; set; }

    public virtual DbSet<Table> Tables { get; set; }

    public virtual DbSet<TableReservation> TableReservations { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CartItem>(entity =>
        {
            entity.HasKey(e => e.OrderItemId).HasName("PK__Cart_Ite__3764B6BC698CE271");

            entity.HasOne(d => d.Dish).WithMany(p => p.CartItems).HasConstraintName("FK__Cart_Item__dish___534D60F1");

            entity.HasOne(d => d.Order).WithMany(p => p.CartItems).HasConstraintName("FK__Cart_Item__order__52593CB8");
        });

        modelBuilder.Entity<Coupon>(entity =>
        {
            entity.HasKey(e => e.CouponCode).HasName("PK__Coupons__ADE5CBB6D50F8FF7");
        });

        modelBuilder.Entity<Customization>(entity =>
        {
            entity.HasKey(e => e.CustomizationId).HasName("PK__Customiz__D1DF8D893D1746B5");

            entity.HasOne(d => d.Dish).WithMany(p => p.Customizations).HasConstraintName("FK__Customiza__dish___6477ECF3");
        });

        modelBuilder.Entity<DeliveryPersonnel>(entity =>
        {
            entity.HasKey(e => e.DeliveryPersonId).HasName("PK__Delivery__F95D3353769AAF29");

            entity.Property(e => e.AssignedOrderId).HasDefaultValueSql("(NULL)");

            entity.HasOne(d => d.AssignedOrder).WithMany(p => p.DeliveryPersonnel).HasConstraintName("FK__DeliveryP__assig__5812160E");
        });

        modelBuilder.Entity<Dish>(entity =>
        {
            entity.HasKey(e => e.DishId).HasName("PK__Dishes__9F2B4CF9D4A27331");

            entity.Property(e => e.PopularityScore).HasDefaultValue(0);

            entity.HasOne(d => d.Subcategory).WithMany(p => p.Dishes).HasConstraintName("FK__Dishes__subcateg__44FF419A");

            entity.HasMany(d => d.Ingredients).WithMany(p => p.Dishes)
                .UsingEntity<Dictionary<string, object>>(
                    "DishIngredient",
                    r => r.HasOne<Ingredient>().WithMany()
                        .HasForeignKey("IngredientId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__Dish_Ingr__ingre__48CFD27E"),
                    l => l.HasOne<Dish>().WithMany()
                        .HasForeignKey("DishId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__Dish_Ingr__dish___47DBAE45"),
                    j =>
                    {
                        j.HasKey("DishId", "IngredientId").HasName("PK__Dish_Ing__742509C58E265909");
                        j.ToTable("Dish_Ingredients");
                        j.IndexerProperty<int>("DishId").HasColumnName("dish_id");
                        j.IndexerProperty<int>("IngredientId").HasColumnName("ingredient_id");
                    });
        });

        modelBuilder.Entity<Ingredient>(entity =>
        {
            entity.HasKey(e => e.IngredientId).HasName("PK__Ingredie__B0E453CF85679663");

            entity.Property(e => e.IsAllergen).HasDefaultValue(false);
        });

        modelBuilder.Entity<MainCategory>(entity =>
        {
            entity.HasKey(e => e.MainCategoryId).HasName("PK__Main_Cat__7FB04A0648CC4F35");
        });

        modelBuilder.Entity<Notification>(entity =>
        {
            entity.HasKey(e => e.NotificationId).HasName("PK__Notifica__E059842F9A56D174");

            entity.Property(e => e.SentAt).HasDefaultValueSql("(getdate())");

            entity.HasOne(d => d.User).WithMany(p => p.Notifications).HasConstraintName("FK__Notificat__user___778AC167");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.OrderId).HasName("PK__Orders__46596229B0431A0F");

            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(getdate())");

            entity.HasOne(d => d.User).WithMany(p => p.Orders).HasConstraintName("FK__Orders__user_id__4F7CD00D");
        });

        modelBuilder.Entity<OrderAssignment>(entity =>
        {
            entity.HasKey(e => e.AssignmentId).HasName("PK__OrderAss__DA8918148E425B6C");

            entity.Property(e => e.AssignmentTime).HasDefaultValueSql("(getdate())");

            entity.HasOne(d => d.DeliveryPerson).WithMany(p => p.OrderAssignments)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__OrderAssi__deliv__5DCAEF64");

            entity.HasOne(d => d.Order).WithMany(p => p.OrderAssignments)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__OrderAssi__order__5CD6CB2B");
        });

        modelBuilder.Entity<OrderHistory>(entity =>
        {
            entity.HasKey(e => e.HistoryId).HasName("PK__Order_Hi__096AA2E99EAB9464");

            entity.Property(e => e.OrderDate).HasDefaultValueSql("(getdate())");

            entity.HasOne(d => d.Order).WithMany(p => p.OrderHistories).HasConstraintName("FK__Order_His__order__7B5B524B");

            entity.HasOne(d => d.User).WithMany(p => p.OrderHistories).HasConstraintName("FK__Order_His__user___7C4F7684");
        });

        modelBuilder.Entity<OrderTracking>(entity =>
        {
            entity.HasKey(e => e.TrackingId).HasName("PK__Order_Tr__7AC3E9AE59147532");

            entity.Property(e => e.UpdatedAt).HasDefaultValueSql("(getdate())");

            entity.HasOne(d => d.Order).WithMany(p => p.OrderTrackings)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Order_Tra__order__01142BA1");
        });

        modelBuilder.Entity<Review>(entity =>
        {
            entity.HasKey(e => e.ReviewId).HasName("PK__Reviews__60883D90D457AF5E");

            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(getdate())");

            entity.HasOne(d => d.Dish).WithMany(p => p.Reviews).HasConstraintName("FK__Reviews__dish_id__693CA210");

            entity.HasOne(d => d.User).WithMany(p => p.Reviews).HasConstraintName("FK__Reviews__user_id__68487DD7");
        });

        modelBuilder.Entity<Subcategory>(entity =>
        {
            entity.HasKey(e => e.SubcategoryId).HasName("PK__Subcateg__F7A5CC26ACD6DC42");

            entity.HasOne(d => d.MainCategory).WithMany(p => p.Subcategories).HasConstraintName("FK__Subcatego__main___3E52440B");
        });

        modelBuilder.Entity<Table>(entity =>
        {
            entity.HasKey(e => e.TableId).HasName("PK__Tables__B21E8F241F2B452A");
        });

        modelBuilder.Entity<TableReservation>(entity =>
        {
            entity.HasKey(e => e.ReservationId).HasName("PK__Table_Re__31384C2925E83332");

            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(getdate())");

            entity.HasOne(d => d.Table).WithMany(p => p.TableReservations).HasConstraintName("FK__Table_Res__table__71D1E811");

            entity.HasOne(d => d.User).WithMany(p => p.TableReservations).HasConstraintName("FK__Table_Res__user___70DDC3D8");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__Users__B9BE370F89B9B5B5");

            entity.Property(e => e.CreatedAt)
                .IsRowVersion()
                .IsConcurrencyToken();
            entity.Property(e => e.LoyaltyPoints).HasDefaultValue(0);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
