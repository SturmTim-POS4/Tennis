
using Microsoft.EntityFrameworkCore;

namespace TennisDb;

public class TennisDbContext :DbContext
{
    public TennisDbContext(DbContextOptions<TennisDbContext> options) : base(options)
    {
            
    }
    public TennisDbContext(){}
    
    public DbSet<Booking> Bookings { get; set; }
    public DbSet<Person> Persons { get; set; }
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        Console.WriteLine($"Db OnConfiguring: IsConfigured={optionsBuilder.IsConfigured}");
        if (!optionsBuilder.IsConfigured)
        {
            string connectionString = @"server=(LocalDB)\mssqllocaldb;attachdbfilename=C:\Temp\TennisBookings.mdf;database=Tennis;integrated security=True;MultipleActiveResultSets=True;";
            Console.WriteLine($"    Using connectionString {connectionString}");
            optionsBuilder.UseSqlServer(connectionString);
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Seed();
    }
}