using Microsoft.EntityFrameworkCore;

namespace TennisDb;

public static class DbSeeder
{
    public static void Seed(this ModelBuilder modelBuilder)
    {
        Console.WriteLine("DbSeederExtension::Seed");
    }
}