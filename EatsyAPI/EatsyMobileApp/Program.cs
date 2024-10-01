using Microsoft.EntityFrameworkCore;
using EatsyMobileApp.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// 1. Add DbContext for EF Core
builder.Services.AddDbContext<EatsyDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// 2. Configure CORS policy to allow all origins
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder =>
        {
            builder.AllowAnyOrigin()    // Allows requests from any origin
                   .AllowAnyHeader()    // Allows any HTTP headers
                   .AllowAnyMethod();   // Allows any HTTP methods (GET, POST, etc.)
        });
});

builder.Services.AddControllers();

// Add Swagger services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
    options.JsonSerializerOptions.DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingNull;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
    app.UseSwagger();
    app.UseSwaggerUI();
//}

app.UseHttpsRedirection();

// Apply CORS policy globally
app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
